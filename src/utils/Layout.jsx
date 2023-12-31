import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import HomePage from '../pages/HomePage/HomePage'
import NavBar2 from '../components/NavBar/NavBar2'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout