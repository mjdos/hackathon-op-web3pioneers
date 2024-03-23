import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./components/page/contact/Contact";
import ErrorPage from "./components/page/error/ErrorPage";
import SignUp from "./components/page/signUp/SignUp";
import Faq from "./components/page/faq/Faq";
import "./index.css"
import Login from "./components/page/login/Login";
import AuctionDetails from "./components/page/auctionDetails/AuctionDetails";
import Dashboard from "./components/page/dashboard/Dashboard";
import Blog from "./components/page/blog/Blog";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import LiveAuction from "./components/page/LiveAuction.jsx/LiveAuction";
import HowItWork from "./components/page/howItWork/HowItWork";
import About from "./components/page/about/About";
import Layout2 from "./components/layout/Layout2";
import Layout3 from "./components/layout/Layout3";
import Merchant from "./components/page/joinMerchant/Merchant";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return <>
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={MainLayout} />
      <Route exact path="/index2" component={Layout2} />
      <Route exact path="/index3" component={Layout3} />
      <Layout>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/about`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact`}
          component={Contact}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/error`}
          component={ErrorPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/signup`}
          component={SignUp}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/auction-details`}
          component={AuctionDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/dashboard`}
          component={Dashboard}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog`}
          component={Blog}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-details`}
          component={BlogDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/live-auction`}
          component={LiveAuction}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/how-works`}
          component={HowItWork}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/faq`}
          component={Faq}
        /> 
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/join-merchant`}
          component={Merchant}
        /> 
      </Layout> 
    </Switch>
  </BrowserRouter>
</>
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
