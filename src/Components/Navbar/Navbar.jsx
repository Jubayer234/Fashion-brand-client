import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavLogo from '../../assets/Group 7009.svg'
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {


    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <div className='space-x-2'>
        <p className='btn bg-[#62acc7] text-white'>
        <NavLink className={({ isActive }) =>
        isActive ? " underline text-white" : ""} to="/">Home</NavLink>
        </p>
        <p className='btn bg-[#62acc7] text-white'>
        <NavLink className={({ isActive }) =>
        isActive ? " underline" : ""} to="/addProducts">Add Product</NavLink>
        </p>
        <p className='btn bg-[#62acc7] text-white'>
        <NavLink className={({ isActive }) =>
        isActive ? " underline" : ""} to="/myCart">My Cart</NavLink>
        </p>
        <p className='btn bg-[#62acc7] text-white'>
        <NavLink className={({ isActive }) =>
        isActive ? " underline" : ""} to="/register">Register</NavLink>
        </p>
        <p className='btn bg-[#62acc7] text-white'>
        <NavLink className={({ isActive }) =>
        isActive ? " underline" : ""} to="/login">Login</NavLink>
        </p>
        
    </div>


    return (
        <div className='max-w-7xl mx-auto  pt-6 pb-5 border-b'>
            <div className="navbar grid md:flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-8 lg:w-10 ' src={NavLogo} />
                    <p className="btn btn-ghost normal-case text-lg md:text-4xl text-[#3734A9]">Fashion and Apparel</p>
                </div>
                <div className="navbar-center hidden lg:flex mr-20">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="ml-32">
                {
                        user ? 
                        <button onClick={handleLogOut} className='btn  ml-3 bg-[#62acc7] font-semibold text-white'>LogOut </button>
                        :
                        <Link to={'/login'}>
                        <button className='btn ml-3 border bg-[#3734A9] font-semibold text-white'>Login</button>
                    </Link>

                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar