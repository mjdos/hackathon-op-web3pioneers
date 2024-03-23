import React from "react";
import { Link } from "react-router-dom";

function ErrorWrapper() {
  return (
    <>
      <div className="error-section pt-120 pb-120">
        <img
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-top"
          alt=""
        />
        <img
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-bottom"
          alt=""
        />
        <img src={process.env.PUBLIC_URL + "/images/bg/e-vector1.svg"} className="evector1" alt="evector1" />
        <img src={process.env.PUBLIC_URL + "/images/bg/e-vector2.svg"} className="evector2" alt="evector2" />
        <img src={process.env.PUBLIC_URL + "/images/bg/e-vector3.svg"} className="evector3" alt="evector3" />
        <img src={process.env.PUBLIC_URL + "/images/bg/e-vector4.svg"} className="evector4" alt="evector4" />
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="error-wrapper">
                <img
                  src={process.env.PUBLIC_URL + '/images/bg/error-bg.png'}
                  className="error-bg img-fluid"
                  alt="error-bg"
                />
                <div
                  className="error-content wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <h2>Sorry we can’t find that page</h2>
                  <p className="para">
                    The page you are looking for was moved, removed, renamed or
                    never existed
                  </p>
                  <Link to={`${process.env.PUBLIC_URL}/`} onClick={window.scrollTo({top: 0,behavior:"smooth"})} className="eg-btn btn--primary btn--md">
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorWrapper;
