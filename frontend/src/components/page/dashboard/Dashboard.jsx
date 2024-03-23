import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import DashbordWrap from './DashboardWrap'

function Dashboard() {
  return (
    <>
     <Breadcrumb pageName="Dashboard" pageTitle="Dashboard"/> 
     <DashbordWrap/>
     <AboutUsCounter/>  
    </>
  )
}

export default Dashboard