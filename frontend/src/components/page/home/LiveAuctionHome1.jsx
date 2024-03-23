import React from 'react'
import { Link } from 'react-router-dom'
import LiveAuctionCard from '../LiveAuction.jsx/LiveAuctionCard'

function LiveAuctionHome1() {
  return (
    <>
     <div className="live-auction pb-120">
        <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"} className="img-fluid section-bg" />
        <div className="container position-relative">
          <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/dotted1.png"} className="dotted1" />
          <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/dotted1.png"} className="dotted2" />
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>Leilão de Ativos Digitais</h2>
                <p className="mb-0">Explore o melhor e maior mercado de leilões de ativos digitais do mundo com nossos belos produtos de leilão.
                  Queremos fazer parte do seu sorriso, sucesso e crescimento futuro.</p>
              </div>
            </div>
          </div>
          <div className="row gy-4 mb-60 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10 ">
            <LiveAuctionCard
                image="/images/bg/live-auc1.png"
                price="75000.99"
                title="Royal Enfield 250 CC Novinha à Venda"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
            <LiveAuctionCard
                image="/images/bg/live-auc2.png"
                price="850.99"
                title="Anéis de Casamento Exclusivos Edição Especial (S2022)"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
            <LiveAuctionCard
                image="/images/bg/live-auc3.png"
                price="56255.99"
                title="Toyota AIGID Classe A Hatchback à Venda (2017 - 2021)"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
            <LiveAuctionCard
                image="/images/bg/live-auc4.png"
                price="350.99"
                title="Havit HV-G61 Game Pad Duplo USB Preto com Vibração"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
            <LiveAuctionCard
                image="/images/bg/live-auc5.png"
                price="2225.99"
                title="Honda CBR 600 RR Novinha à Venda (2022)"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
            <LiveAuctionCard
                image="/images/bg/live-auc6.png"
                price="1158.99"
                title="IPhone 11 Pro Max Todas as Variantes Disponíveis à Venda"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center">
              <Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="eg-btn btn--primary btn--md mx-auto">Ver Tudo</Link>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default LiveAuctionHome1
