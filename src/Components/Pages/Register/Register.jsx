import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation ();
    const navigate = useNavigate();


    const handleRegister = (e) => {
        
        e.preventDefault()
        const displayName = e.target.displayName.value;
        const Photo = e.target.Photo;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password.length < 6){
            toast.error("Your password is less then 6 character")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Your password should have  at Least one Capital letter")
            return;
        }else if(!/(?=.*[@$!%*?&])/.test(password)){
            toast.error("Password doesn't have a special character")
            return;
        }else{
            createUser(email,password,displayName,Photo)
            .then(result => {
                Swal.fire('successfully registered!')
                console.log(result.user)
                navigate(location?.state ? location.state : '/' )
            })
            .catch(error => {
                console.error(error)
            })
        }
      
    }

  return (
    <div className='bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3]'>
        <div className='max-w-7xl mx-auto pt-10 min-h-screen '>
        <div>
        <h2 className='text-center pb-5 mb-8 text-4xl text-white border-b w-96 mx-auto font-serif'>Please Register</h2>
        <div className="card w-[450px] mx-auto  shadow-2xl bg-gradient-to-r   from-[#7bbdd3] to-[#d8ead0]   ">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name='displayName' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  type="password" name='password' placeholder="Provide password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn  bg-gradient-to-r from-sky-300 to-blue-400 ">Register</button>
                </div>
                <p className='text-white text-lg mt-5 text-center'>Already have an account? <Link className='text-blue-600 font-serif font-semibold' to="/login" >Login</Link></p>
            </form>
            
        </div>
    </div>
    <div><Toaster></Toaster></div>
        </div>
    </div>
  )
}

export default Register