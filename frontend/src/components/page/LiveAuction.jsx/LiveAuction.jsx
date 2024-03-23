import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import LiveAuctionWrap from './LiveAuctionWrap'

function LiveAuction() {
  return (
    <>
     <Breadcrumb pageName="Live Auction" pageTitle="Live Auction"/>
     <LiveAuctionWrap/>
     <AboutUsCounter/>   
    </>
  )
}

export default LiveAuction