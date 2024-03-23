import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
function Footer(props) {
  
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

  }, []);
  const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <footer>

        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex align-items-center g-4">
              <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                <p>Equipe Web3Pioneer</p>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                <p className="d-sm-flex d-none">Nós aceitamos:</p>
                <ul className="footer-logo-list">
                  <li><Link to={"#"} onClick={scrollTop}><img alt="images" src={process.env.PUBLIC_URL + "/images/bg/footer-pay1.png"} /></Link></li>
                    <li><Link to={"#"} onClick={scrollTop}><img alt="images" src={process.env.PUBLIC_URL + "/images/bg/footer-pay4.png"} /></Link></li>
                  <li><Link to={"#"} onClick={scrollTop}><img alt="images" src={process.env.PUBLIC_URL + "/images/bg/footer-pay5.png"} /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
