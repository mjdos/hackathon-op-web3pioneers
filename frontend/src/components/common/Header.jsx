import React, { useEffect, useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TopbarHeader from "./TopbarHeader";

function Header() {
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
    ? header.classList.add("sticky")
    : header.classList
    ? header.classList.remove("sticky")
    : header.classList.add("sticky");
  };

  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  /*---------add event scroll top----------*/
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const searchFullScreen = () => {
    if (search === false || search === 0) {
      setSearch(1);
      console.log(search);
    } else {
      setSearch(false);
    }
  };

  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "about":
        return { activeMenu: "about" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }

  return (
    <>

      <TopbarHeader />

      <header className="header-area style-1">
        <div className="header-logo">
          <Link to={`${process.env.PUBLIC_URL}/`} onClick={scrollTop}>
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + "/images/bg/header-logo.png"}
            />
          </Link>
        </div>
        <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link to={"/"}>
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + "/images/bg/header-logo.png"}
                />
              </Link>
            </div>
            <div className="menu-close-btn" onClick={handleSidbarMenu}>
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <ul className="menu-list">
            <li onClick={() => dispatch({ type: "homeOne" })}
            >
              <Link
                to={"#"}
                className={`${
                  state.activeMenu === "homeOne" ? "active" : ""
                }`}
              >
                Home
              </Link>

            </li>
            <li onClick={() => dispatch({ type: "about" })}>
              <Link
                to={`${process.env.PUBLIC_URL}/about`}
                onClick={scrollTop}
                className={`${state.activeMenu === "about" ? "active" : ""} `}
              >
                Quem Somos
              </Link>
            </li>
            
            <li onClick={() => dispatch({ type: "contact" })}>
              <Link
                to={`${process.env.PUBLIC_URL}/contact`}
                onClick={scrollTop}
                className={`${state.activeMenu === "contact" ? "active" : ""} `}
              >
                Contato
              </Link>
            </li>
          </ul>
          {/* mobile-search-area */}
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form">
              <div className="input-with-btn d-flex flex-column">
                <input type="text" placeholder="Search here..." />
                <button type="submit" className="eg-btn btn--primary btn--sm">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="nav-right d-flex align-items-center">
          <div className="hotline d-xxl-flex d-none">
            <div className="hotline-icon">
              <img
                alt="images"
                src={process.env.PUBLIC_URL + "/images/icons/header-phone.svg"}
              />
            </div>
            
          </div>

          <div
            className="mobile-menu-btn d-lg-none d-block"
            onClick={handleSidbarMenu}
          >
            <i className="bx bx-menu" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
