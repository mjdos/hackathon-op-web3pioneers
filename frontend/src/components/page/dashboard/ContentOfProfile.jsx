import React, { useState } from 'react'
function ContentOfProfile() {
  const [openEye, setOpenEye]= useState();
  const handleEyeIcon = ()=>{
    if(openEye === false || openEye ===0){
      setOpenEye(1)
    }else{
      setOpenEye(false)
    }
  }
  return (
    <>
        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <div className="dashboard-profile">
          <div className="owner">
            <div className="image">
              <img alt="images" src={ process.env.PUBLIC_URL +"/images/bg/pro-pic.png"} />
            </div>
            <div className="content">
              <h3>Johan Martin SR-</h3>
              <p className="para">Johan Martin SR-</p>
            </div>
          </div>
          <div className="form-wrapper">
            <form action="#">
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>Frist Name *</label>
                    <input type="text" placeholder="Your first name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Your last name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>Contact Number</label>
                    <input type="text" placeholder={+8801} />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>Email</label>
                    <input type="text" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <label>Address</label>
                    <input type="text" name="message" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>City</label>
                    <div className="select style-2">
                      <div className="selectBtn" data-type="firstOption">Rajshahi</div>
                      <div className="selectDropdown">
                        <div className="option" data-type="firstOption">Rajshahi</div>
                        <div className="option" data-type="secondOption">Dhaka</div>
                        <div className="option" data-type="thirdOption">Barishal</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>State</label>
                    <div className="select style-2">
                    <div className="selectBtn" data-type="firstOption">Bombay</div>
                    <div className="selectDropdown">
                      <div className="option" data-type="firstOption">Dilli</div>
                      <div className="option" data-type="secondOption">Dhaka</div>
                      <div className="option" data-type="thirdOption">Sylhet</div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>Zip Code</label>
                    <input type="text" placeholder="00000" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="form-inner">
                    <label>Country</label>
                    <div className="select style-2">
                    <div className="selectBtn" data-type="firstOption">Bangladesh</div>
                    <div className="selectDropdown">
                      <div className="option" data-type="firstOption">Bangladesh</div>
                      <div className="option" data-type="secondOption">America</div>
                      <div className="option" data-type="thirdOption">India</div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <label>Password *</label>
                    <input type={openEye === 1 ? "password": "text"} name="password" id="password" placeholder="Create A Password" />
                    <i className={openEye === 1 ? "bi bi-eye-slash" :"bi bi-eye-slash bi-eye"} id="togglePassword" onClick={handleEyeIcon} />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner mb-0">
                    <label>Confirm Password *</label>
                    <input type={openEye === 1 ? "password": "text"} name="password" id="password2" placeholder="Create A Password" />
                    <i className={openEye === 1 ? "bi bi-eye-slash" :"bi bi-eye-slash bi-eye"} onClick={handleEyeIcon} id="togglePassword2" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="button-group">
                    <button type="submit" className="eg-btn profile-btn">Update Profile</button>
                    <button className="eg-btn cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContentOfProfile