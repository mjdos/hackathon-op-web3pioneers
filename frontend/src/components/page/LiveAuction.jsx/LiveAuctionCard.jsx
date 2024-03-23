import React from "react";
import { Link } from "react-router-dom";
import Counter from "../../common/Counter";

function LiveAuctionCard(props) {
  return (
    <>
      <div
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        className="eg-card auction-card1 wow fadeInDown"
      >
        <div className="auction-img">
          <img alt="images" src={`${process.env.PUBLIC_URL} ${props.image}`} />
          <div className="auction-timer">
            <div className="countdown" id="timer1">
              <h4>
                <Counter/>
              </h4>
            </div>
          </div>
          <div className="author-area">
            <div className="author-emo">
              <img
                alt="images"
                src={process.env.PUBLIC_URL + "/images/icons/smile-emo.svg"}
              />
            </div>
            <div className="author-name">
              <span>by @robatfox</span>
            </div>
          </div>
        </div>
        <div className="auction-content">
          <h4>
            <Link
              to={`${process.env.PUBLIC_URL}/auction-details`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {props.title}
            </Link>
          </h4>
          <p>
            Preço Atual do Lance : <span>R${props.price}</span>
          </p>
          <div className="auction-card-bttm">
            <Link
              to={`${process.env.PUBLIC_URL}/auction-details`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="eg-btn btn--primary btn--sm"
            >
              Dê um Lance
            </Link>
            <div className="share-area">
              <ul className="social-icons d-flex">
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-pinterest" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-instagram" />
                  </Link>
                </li>
              </ul>
              <div>
                <Link to={"#"} className="share-btn">
                  <i className="bx bxs-share-alt" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveAuctionCard;
