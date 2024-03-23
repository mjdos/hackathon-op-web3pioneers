import React from 'react'
import { Link } from 'react-router-dom'
import TimeCounter from '../../common/TimeCounter'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function UpCommingHome1() {
  const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  const upcomingSlider = {
    slidesPerView: 1,
  speed: 1000,
  spaceBetween: 24,
  loop: true,
  roundLengths: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: '.coming-prev1',
    prevEl: '.coming-next1',
  },

  breakpoints: {
      280:{
          slidesPerView: 1
        },
    480:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 2
    },
    992:{ 
      slidesPerView: 2
    },
    1200:{
      slidesPerView: 3
    },
   
  }
  }
  return (
    <>
     <div className="upcoming-seciton pb-120">
        <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"} className="img-fluid section-bg" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>Up Comming Auction</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <Swiper {...upcomingSlider} className="swiper upcoming-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="eg-card c-feature-card1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                    <div className="auction-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/umcoming1.png"} />
                      <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer7">
                        <TimeCounter/>
                      </div>
                      <div className="author-area2">
                        <div className="author-name">
                          <span>by @robatfox</span>
                        </div>
                        <div className="author-emo">
                          <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/upcoming-author1.png"} />
                        </div>
                      </div>
                    </div>
                    <div className="c-feature-content">
                      <div className="c-feature-category">Time Zoon</div>
                      <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>
                        <h4>Michael Korian Gold Special Watch m20L6 Bidding</h4>
                      </Link>
                      <p>Preço Atual do Lance : <span>R$15.99</span></p>
                      <div className="auction-card-bttm">
                        <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary btn--sm">View
                          Details</Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
                          </ul>
                          <div>
                            <div className="share-btn"><i className="bx bxs-share-alt" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="eg-card c-feature-card1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <div className="auction-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/umcoming2.png"} />
                      <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer8">
                        <TimeCounter/>
                      </div>
                      <div className="author-area2">
                        <div className="author-name">
                          <span>by @robatfox</span>
                        </div>
                        <div className="author-emo">
                          <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/upcoming-author2.png"} />
                        </div>
                      </div>
                    </div>
                    <div className="c-feature-content">
                      <div className="c-feature-category">Lit Gaslighte</div>
                      <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>
                        <h4>Watercolor Special Lighter 2.2 For Saleing Offer</h4>
                      </Link>
                      <p>Preço Atual do Lance : <span>R$15.99</span></p>
                      <div className="auction-card-bttm">
                        <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary btn--sm">View
                          Details</Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
                          </ul>
                          <div>
                            <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="eg-card c-feature-card1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <div className="auction-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/umcoming3.png"} />
                      <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer9">
                      <TimeCounter/>
                      </div>
                      <div className="author-area2">
                        <div className="author-name">
                          <span>by @robatfox</span>
                        </div>
                        <div className="author-emo">
                          <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/upcoming-author3.png"} />
                        </div>
                      </div>
                    </div>
                    <div className="c-feature-content">
                      <div className="c-feature-category">Motor Bike</div>
                      <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>
                        <h4>BMW AIGID A Class Hatch M26 Motor Bike</h4>
                      </Link>
                      <p>Preço Atual do Lance : <span>R$15.99</span></p>
                      <div className="auction-card-bttm">
                        <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary btn--sm">View
                          Details</Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
                          </ul>
                          <div>
                            <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="eg-card c-feature-card1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay=".8s">
                    <div className="auction-img">
                      <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/umcoming1.png"} />
                      <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer10">
                        <TimeCounter/>
                      </div>
                      <div className="author-area2">
                        <div className="author-name">
                          <span>by @robatfox</span>
                        </div>
                        <div className="author-emo">
                          <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/upcoming-author1.png"} />
                        </div>
                      </div>
                    </div>
                    <div className="c-feature-content">
                      <div className="c-feature-category">Test Watch</div>
                      <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop}>
                        <h4>Michael Kors Watch m20L6</h4>
                      </Link>
                      <p>Preço Atual do Lance : <span>R$15.99</span></p>
                      <div className="auction-card-bttm">
                        <Link to={`${process.env.PUBLIC_URL}/auction-details`} onClick={scrollTop} className="eg-btn btn--primary btn--sm">View
                          Details</Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li><Link to={"#"}><i className="bx bxl-facebook" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-twitter" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-pinterest" /></Link></li>
                            <li><Link to={"#"}><i className="bx bxl-instagram" /></Link></li>
                          </ul>
                          <div>
                            <Link to={"#"} className="share-btn"><i className="bx bxs-share-alt" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom d-flex justify-content-between align-items-center">
              <Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop} className="eg-btn btn--primary btn--md">View ALL</Link>
              <div className="swiper-pagination style-3 d-lg-block d-none" />
              <div className="slider-arrows coming-arrow d-flex gap-3">
                <div className="coming-prev1 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
                <div className="coming-next1 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default UpCommingHome1