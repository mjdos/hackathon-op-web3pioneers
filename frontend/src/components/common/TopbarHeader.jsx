import React from "react";
import { Link } from "react-router-dom";
// import Select from 'react-select';
// import { curencyOptions } from "../../data/data";
function TopbarHeader() {
  // const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  return (
    <>
     <div className="topbar">
  <div className="topbar-left d-flex flex-row align-items-center">
    <h6>Siga nossas redes</h6>
    <ul className="topbar-social-list gap-2">
      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
      <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
    </ul>
  </div>

 
</div>
    </>
  );
}
export default TopbarHeader;
