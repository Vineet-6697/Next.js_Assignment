import React, { Children } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
   {/* <Header/> */}
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout