import React from 'react'
import Counter from '../../common/Counter'

function AuctionDetailsInfo() {
  return (
    <>
     <div className="row g-4 mb-50">
        <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
          <ul className="nav small-image-list d-flex flex-md-column flex-row justify-content-center gap-4  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
            <li className="nav-item">
              <div id="details-img1" data-bs-toggle="pill" data-bs-target="#gallery-img1" aria-controls="gallery-img1">
                <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery1.png"} className="img-fluid" />
              </div>
            </li>
            <li className="nav-item">
              <div id="details-img2" data-bs-toggle="pill" data-bs-target="#gallery-img2" aria-controls="gallery-img2">
                <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery2.png"} className="img-fluid" />
              </div>
            </li>
            <li className="nav-item">
              <div id="details-img3" data-bs-toggle="pill" data-bs-target="#gallery-img3" aria-controls="gallery-img3">
                <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery3.png"} className="img-fluid" />
              </div>
            </li>
          </ul>
          <div className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
            <div className="tab-pane big-image fade show active" id="gallery-img1">
              <div className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
                <h3 id="countdown-timer-1"><Counter/></h3>
              </div>
              <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery1.png"} className="img-fluid" />
            </div>
            <div className="tab-pane big-image fade" id="gallery-img2">
              <div className="auction-gallery-timer d-flex align-items-center justify-content-center">
                <h3 id="countdown-timer-2"><Counter/></h3>
              </div>
              <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery2.png"} className="img-fluid" />
            </div>
            <div className="tab-pane big-image fade" id="gallery-img3">
              <div className="auction-gallery-timer d-flex align-items-center justify-content-center">
                <h3 id="countdown-timer-3"><Counter/></h3>
              </div>
              <img alt="imagens" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery3.png"} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div className="product-details-right  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
            <h3>Caneta Marcadora Premium Infinity</h3>
            <p className="para">Descubra a precisão impecável com a Caneta Marcadora Premium Infinity, projetada para destacar sua criatividade e melhorar sua produtividade.</p>
            <h4>Preço de Lance: <span>R$ 65,00</span></h4>
            <div className="bid-form">
              <div className="form-title">
                <h5>Dê seu Lance Agora</h5>
                <p>Quantia do Lance: Lance Mínimo R$ 10,00</p>
              </div>
              <form>
                <div className="form-inner gap-2">
                  <input type="text" placeholder="R$ 0,00" />
                  <button className="eg-btn btn--primary btn--sm" onSubmit={(e)=>e.preventDefault()} type="submit">Dar Lance</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default AuctionDetailsInfo
