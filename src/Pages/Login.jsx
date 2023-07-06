import React from 'react'
import logo from '../assets/AGLogo.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full h-screen'>
        <div className='loginPageBackground lg:block md:block sm:hidden w-full h-full p-20'>
            <img src={logo} className='w-1/2 bg-opacity-80 p-2' alt="" />
            <div className='mt-32 space-y-3 lg:w-2/3 md:w-full sm:w-3/3'>
                <p className='font-light text-4xl text-gray-50'>Welcome to</p>
                <p className='font-semibold lg:text-6xl md:text-4xl sm:text-xl duration-500 text-gray-50'>AssetGround</p>
                <p className='font-normal text-xsm text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.t enim ad minim veniam, quis nostrud.</p>
            </div>
        </div>
        <div className='flex  items-center bg-white justify-center'>
            <div className='w-2/4'>
            <p className='font-extrabold text-4xl'>Login</p>
            <p className='font-medium text-gray-500 mt-4 text-sm'>Welcome back! Please login to your account.</p>

            <div className='pt-8'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Email</p>
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-full rounded'/>
            </div>

            <div className='pt-8'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Password</p>
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-full rounded'/>
            </div>

            <p className='font-medium text-xsm text-right mt-4 text-gray-400 text-sm'>Forget Password?</p>
            
            <Link to="/forgotpassword"><button className='w-full p-3 mt-4 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Login</button></Link>

            <p className='font-medium text-xsm mt-4 text-gray-400 text-sm'>Don't have an account? <span className='text-red-500'>Register</span></p>


            </div>
        </div>
    </div>
  )
}

export default Login