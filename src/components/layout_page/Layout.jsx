import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navigationbar'

const Layout = () => {
    return (
        <div>
            <Navigationbar />
            <Outlet />
        </div>
    )
}

export default Layout