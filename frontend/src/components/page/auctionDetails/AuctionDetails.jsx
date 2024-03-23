import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import AuctionDetailsWrap from './AuctionDetailsWrap'

function AuctionDetails() {
  return (
    <>
     <Breadcrumb pageName="Detalhes do Item" pageTitle="Detalhes do Item" />   
     <AuctionDetailsWrap/>
     <AboutUsCounter/>
    </>
  )
}

export default AuctionDetails