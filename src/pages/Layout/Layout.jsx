import React from 'react'
import css from './Layout.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'



const Layout = () => {
  const {pathname} = useLocation()
  return (
    <div className={css.container}>
      {pathname === "/" && <Navigate to="/home"/>}
      <Sidebar />
      <div className={css.main}>
        <Outlet />
      </div>
      
    </div>
    
  )
}

export default Layout