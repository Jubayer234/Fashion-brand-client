import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const Root = () => {
  return (
    <div className='mx-auto font-gabarito'>
        <div className='bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3]'>
            <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Root