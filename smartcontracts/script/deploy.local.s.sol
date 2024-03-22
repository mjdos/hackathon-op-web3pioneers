// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Script, console2} from "forge-std/Script.sol";
import {Optimism} from "../src/Optimism.sol"; // Ajuste o caminho conforme necessário

contract DeployOptimism is Script {
    Optimism optimism;

    function setUp() public {
        // Você pode adicionar aqui qualquer configuração pré-deploy necessária
    }

    function run() public {
        vm.startBroadcast(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);

        // Substitua os argumentos abaixo conforme os parâmetros do seu construtor
        string memory name = "ELO";
        string memory symbol = "ELO";
        address initialOwner = msg.sender; // Ou o endereço do proprietário desejado

        optimism = new Optimism(name, symbol, initialOwner);
        console2.log("Optimism contract address: ", address(optimism));

        vm.stopBroadcast();
    }
}