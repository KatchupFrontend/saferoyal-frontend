import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const HLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default HLayout