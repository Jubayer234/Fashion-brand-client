import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const Root = () => {
  return (
    <div className='mx-auto font-gabarito'>
        <div className='bg-[#F7F7F7]'>
            <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Root