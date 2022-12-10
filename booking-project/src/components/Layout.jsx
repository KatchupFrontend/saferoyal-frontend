import React from 'react'
import NavLanding from './NavLanding'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <NavLanding/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout