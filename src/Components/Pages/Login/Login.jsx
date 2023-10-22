import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import Swal from 'sweetalert2';

const Login = () => {

    const {signIn}= useContext(AuthContext);
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
   
    const handleGoogleSignIn =() => {
        signIn().then(result => {
            console.log(result.user)
            Swal.fire("logged in");
            navigate(location?.state ? location.state : '/' )
        })
    }
    const handleLogIn =(e) => {
        e.preventDefault ()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email,password)
        .then(result => {
            console.log(result.user);
            Swal.fire("logged in");
            navigate(location?.state ? location.state : '/' )
        } )
    }

  return (
    <div>
        <div className=" min-h-screen pt-10 bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3] ">
                <div>
                    <h2 className='text-center pb-5 mb-8 text-4xl text-white font-semibold border-b w-96 mx-auto'>Please Login</h2>
                    <div className="card w-[400px] mx-auto  shadow-2xl  bg-gradient-to-r from-[#7bbdd3] to-[#d8ead0]">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-gradient-to-r from-sky-300 to-blue-400 ">Login</button>
                            </div>
                            <button onClick={handleGoogleSignIn} className='btn bg-blue-500 text-white'>sign In with google</button>
                            <p className='text-white text-lg mt-5 text-center '>Don't have an account? <Link className='text-blue-600 font-serif font-semibold' to="/register" >Register</Link></p>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login