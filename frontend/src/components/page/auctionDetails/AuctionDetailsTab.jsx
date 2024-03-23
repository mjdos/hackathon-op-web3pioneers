import React from 'react'
import {Link} from 'react-router-dom'
import Counter from '../../common/Counter'
function AuctionDetailsTab() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="row d-flex justify-content-center g-4">
        <div className="col-lg-8">
          <ul className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active details-tab-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Descrição</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link details-tab-btn" id="pills-bid-tab" data-bs-toggle="pill" data-bs-target="#pills-bid" type="button" role="tab" aria-controls="pills-bid" aria-selected="false">Histórico de Lances</button>
            </li>

          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="describe-content">
                <h4>Descrição</h4>
                <p className="para">Descubra a precisão impecável com a Caneta Marcadora Premium Infinity, projetada para destacar sua criatividade e melhorar sua produtividade. Com uma ponta resistente e fina, esta caneta marcadora oferece uma experiência de escrita suave, permitindo linhas consistentes e sem borrões em uma variedade de superfícies. Perfeita para profissionais, artistas e entusiastas do bullet journal, sua tinta à base de água é ecologicamente correta e segura, disponível em uma vibrante gama de cores que não desbotam com o tempo. Seja organizando seus apontamentos ou dando vida às suas ideias artísticas, a Caneta Marcadora Premium Infinity é a escolha definitiva para quem busca qualidade e durabilidade.</p>
                
                
              </div>
            </div>
            <div className="tab-pane fade" id="pills-bid" role="tabpanel" aria-labelledby="pills-bid-tab">
              <div className="bid-list-area">
                <ul className="bid-list">
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/bidder1.png"} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}><h6>Robart FOX</h6></Link>
                            <p>0.06 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>4 Horas Atrás</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src= {process.env.PUBLIC_URL + "/images/bg/bidder2.png"} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}><h6>Jane Cooper</h6></Link>
                            <p>0.05 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>5 Horas Atrás</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/bidder3.png"} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}><h6>Guy Hawkins</h6></Link>
                            <p>0.04 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>6 Horas Atrás</p>
                        </div>
                      </div>
                    </div>
                  </li>
                 
                </ul>                            
              </div>
            </div>
      
          </div>
        </div>
        
      </div>   
    </>
  )
}

export default AuctionDetailsTab