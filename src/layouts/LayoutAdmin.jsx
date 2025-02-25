import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

const LayoutAdmin = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default LayoutAdmin