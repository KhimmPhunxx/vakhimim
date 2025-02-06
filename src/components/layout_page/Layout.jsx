import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navigationbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div>
            <Navigationbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout