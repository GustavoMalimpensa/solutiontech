import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar2 from '../components/NavBar/NavBar2'

const Layout2 = ({ children }) => {
  return (
    <div>
      <NavBar2 />
      {children}
      <Footer />
    </div>
  )
}

export default Layout2