import React from 'react'
import Footer from './common/Footer'
import Header from './common/Header'

function Layout({children}) {
  return (
    <>
     <Header/> 
     {children}
     <Footer/>  
    </>
  )
}

export default Layout