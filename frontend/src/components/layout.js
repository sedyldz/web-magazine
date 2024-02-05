import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between  ">
      <div>
        <Navbar />
        <div className="pt-12">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
