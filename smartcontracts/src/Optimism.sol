// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../../node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Optimism is ERC20, Ownable, ReentrancyGuard {

    constructor(
        string memory name, 
        string memory symbol, 
        address initialOwner
        )
        ERC20(name, symbol)
        Ownable(initialOwner) /// Endereço do proprietário do Contrato
    {
        
    }

/*****************************************************************************************************/
/********* PARTE 1 - LIQUIDEZ

    /*************************************************************/
    /********* RESGATAR TOKEN DA CARTEIRA DE LIQUIDEZ **************/
    /*************************************************************/

    // Variável para rastrear o saldo da carteira de liquidez
    uint256 public saldoCarteiraLiquidez;

    function moverTOKENsDaLiquidez(address destino, uint256 valor) public onlyAuthorized nonReentrant {
        require(saldoCarteiraLiquidez >= valor, "Saldo insuficiente na carteira de liquidez");
        saldoCarteiraLiquidez -= valor;
        payable(destino).transfer(valor);
    }

    ///Vê o saldo de TOKEN do contrato
    function getSaldoTotal() public view returns (uint256) {
        return address(this).balance;
    }


/*****************************************************************************************************/
/********* PARTE 2 - EMISSÃO


    /**********************************************************************/
    /********* LISTA DE CARTEIRAS AUTORIZADAS A CRIAR TOKEN  *************/
    /**********************************************************************/

    // Mapeamento que armazena se uma carteira está autorizada
    mapping(address => bool) public carteirasAutorizadas;

    // Modificador para usar lista de carteiras autorizadas
    modifier onlyAuthorized() {
        require(carteirasAutorizadas[msg.sender], "Apenas carteiras autorizadas podem executar esta funcao");
        _; // Isso indica que o código da função chamada será executado após a verificação do modificador
    }

    // Estrutura para lista
    struct CarteiraAutorizada {
        address carteira;
        bool autorizada;
    }

    // Array de structs para armazenar as carteiras autorizadas
    CarteiraAutorizada[] public carteirasAutorizadasList;

    // Evento para notificar quando uma carteira é adicionada à lista de autorizações
    event CarteiraAutorizadaAdicionada(address carteira, bool autorizada);

    // Função para adicionar ou remover endereços autorizados
    function setCarteiraAutorizada(address carteira, bool autorizada) public onlyOwner {
        carteirasAutorizadas[carteira] = autorizada;
        carteirasAutorizadasList.push(CarteiraAutorizada(carteira, autorizada));
        emit CarteiraAutorizadaAdicionada(carteira, autorizada);
    }

    // Função para obter todas as carteiras autorizadas
    function getEnderecosAutorizados() public view returns (address[] memory) {

      uint256 length = carteirasAutorizadasList.length;
      address[] memory enderecosAutorizados = new address[](length);

      for (uint256 i = 0; i < length; i++) {
        enderecosAutorizados[i] = carteirasAutorizadasList[i].carteira;
      }

      return enderecosAutorizados;

    }


    /***********************************************************/
    /********* EMISSÃO DE TOKEN PARA UM COMPRADOR *************/
    /***********************************************************/
    
    // Evento emitido quando um TOKEN é emitido para um detentor
    event TokenEmitido(address indexed detentor, uint256 quantidade);

    // Mapeamento do endereço do detentor para a lista de IDs de TOKENs que ele possui
    mapping(address => uint256) public tokensDetentor;

    // Função para emitir um TOKEN já criado para um detentor específico com quantidade e valor fracionado
    function emitirToken(
        address detentor,
        uint256 quantidade
    ) public onlyAuthorized {

      require(quantidade > 0, "Quantidade deve ser maior que 0.");
      require(carteirasAutorizadas[msg.sender], "Carteira nao autorizada a emitir titulos.");

      // Adiciona a quantidade de TOKENs ao registro do detentor
      // Isso pode ser um novo mapeamento que associa o detentor e o ID do TOKEN à quantidade detida
      tokensDetentor[detentor] += quantidade;

      //Enviar a quantidade para o detentor
      _mint(detentor, quantidade);

      emit TokenEmitido(detentor, quantidade);

    }
    

    /******************************************************/
    /********* QTD DE TOKENS DE UM DETENTOR **************/
    /******************************************************/
    
    function getQtdTokensDetentor(address detentor) public view returns (uint256) {
        return tokensDetentor[detentor];
    }


/*****************************************************************************************************/
/********* PARTE 4 - COMPRA MERCADO SECUNDÁRIO

    /******************************************/
    /********* DEPÓSITO ANTECIPADO ************/
    /******************************************/
    
    // Mapeamento para rastrear depósitos de Token
    mapping(address => uint256) public depositos;

    // Função para o detentor de destino depositar Token no Contrato
    function depositarParaCompra(uint256 valor) public payable {
      require(valor > 0, "Nenhum valor de Token enviado.");
      require(msg.value >= valor, "Valor enviado insuficiente.");
      depositos[msg.sender] += valor;

      emit DepositoEfetuado(msg.sender, msg.value);
    }

    event DepositoEfetuado(address indexed detentorDestino, uint256 valor);


    /***************************************************************/
    /********* COMPRA DE TOKEN NO MERCADO SECUNDÁRIO **************/
    /***************************************************************/
    function comprar(
    address detentorOrigem,
    address detentorDestino,
    uint256 quantidade,
    uint256 valor
    ) public payable nonReentrant notBlacklisted {

        // Verifica se o remetente da mensagem é o proprietário do contrato
        require(msg.sender == detentorDestino, "Somente o detentor de destino pode comprar.");

        // Verifica se o detentor de origem possui quantidade suficiente do TOKEN
        require(tokensDetentor[detentorOrigem] >= quantidade, "Detentor de origem nao possui quantidade suficiente do titulo.");

        //Depositar Token no contrato
        depositarParaCompra(valor);

        // Verifica se o detentor de destino depositou Token suficiente
        require(depositos[detentorDestino] >= valor, "Saldo de deposito insuficiente.");

        // Atualiza o saldo de TOKENs dos detentores //OK
        tokensDetentor[detentorOrigem] -= quantidade;
        tokensDetentor[detentorDestino] += quantidade;

        // Deduza os tokens do detentor de origem e Adicione os tokens ao detentor de destino
        _transfer(detentorOrigem, detentorDestino, quantidade);

        /********* LIQUIDEZ **************/

        // Calcula a taxa de Liquidez 2%
        uint256 taxa = valor * 2 / 100;

        ///Enviando Saldo para a carteira de liquidez
        saldoCarteiraLiquidez += taxa;

        // Valor a ser transferido para o detentor de origem (valor menos a taxa)
        uint256 valorTransferencia = valor - taxa;

        /********* PAGAMENTO AO DETENTOR DE ORIGEM **************/

        // Transferir Token para o detentor de origem já com desconto de 2%
        payable(detentorOrigem).transfer(valorTransferencia);

        // Atualiza o saldo de depósito do detentor de destino
        depositos[detentorDestino] -= valor;

    }


/*****************************************************************************************************/
/********* PARTE 5 - RESGATE DO TOKEN

    /******************************************/
    /********* RESGATAR TOKEN ****************/
    /******************************************/

    function resgatar(
        address detentor,
        uint256 valor
    ) public payable nonReentrant onlyAuthorized {

        require(carteirasAutorizadas[msg.sender], "Carteira nao autorizada a emitir titulos.");
        require(address(this).balance >= valor, "Valor de Token constante no contrato insuficiente para pagamento do titulo ao detentor.");

        ///Verifica a quantidade de titulos do detentor
        uint256 quantidade = tokensDetentor[detentor];
        require(quantidade > 0, "Quantidade de titulos insuficiente para resgate.");

        // Queima os tokens do detentor
        _burn(detentor, quantidade);

        // Recolhe os TOKENs da carteira do detentor
        tokensDetentor[detentor] = 0;
        
        //Pagamento do TOKEN
        payable(detentor).transfer(valor);

    }

    ////Função para Adicionar Token no contrato
    // Evento para registrar a recepção de Token
    event DepositoNoContrato(address sender, uint256 amount);

    // Função para receber Token e adicionar ao saldo do contrato
    function depositarNoContrato() public payable nonReentrant onlyAuthorized {
        require(msg.value > 0, "Nenhum valor de Token enviado.");
        
        // Emitir evento indicando que o depósito foi recebido
        emit DepositoNoContrato(msg.sender, msg.value);
    }


/*****************************************************************************************************/
/********* PARTE 6 - BLACK LIST

    /**************************************************************/
    /********* CRIAÇÃO DA LISTA NEGRA DE CARTEIRAS ****************/
    /**************************************************************/

    // Mapeamento para rastrear a lista negra
    mapping(address => bool) private blacklist;

    // Modificador para bloquear endereços na lista negra
    modifier notBlacklisted() {
        require(!blacklist[msg.sender], "Endereco na lista negra.");
        _;
    }

    // Função para adicionar um endereço à lista negra
    function addToBlacklist(address _address) public onlyOwner {
        blacklist[_address] = true;
    }

    // Função para remover um endereço da lista negra
    function removeFromBlacklist(address _address) public onlyOwner {
        blacklist[_address] = false;
    }


}