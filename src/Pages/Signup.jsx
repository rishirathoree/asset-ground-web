import React from 'react'
import logo from '../assets/AGLogo.png'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full h-screen'>
        <div className='loginPageBackground lg:block md:block sm:hidden w-full h-full p-20'>
            <img src={logo} className='w-1/2 bg-opacity-80 bg-white p-2' alt="" />
            <div className='mt-32 space-y-3 lg:w-2/3 md:w-full sm:w-3/3'>
                <p className='font-light text-4xl text-gray-50'>Welcome to</p>
                <p className='font-semibold lg:text-6xl md:text-4xl sm:text-xl duration-500 text-gray-50'>AssetGround</p>
                <p className='font-normal text-xsm text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
        </div>
        
        {/* RIght Side Form */}
        <div className='p-20 overflow-hidden overflow-y-auto bg-white'>
        <p className='font-semibold text-2xl'>Register</p>
        <p className='font-normal mt-4 text-sm'>Create an account</p>

        {/* Form */}
        <div className='mt-4 grid grid-cols-2 gap-4 w-full'>
        
        {/* for email */}
        <div>
        <p className='font-medium mt-4 text-xsm text-slate-500'>First Name</p>
        <input type="text" placeholder='First Name' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 w-full rounded p-3 text-xsm'/>
        </div>

        <div>
        <p className='font-medium mt-4 text-xsm text-slate-500'>Last Name</p>
        <input type="text" placeholder='Last Name' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 w-full rounded p-3 text-xsm'/>
        </div>

        {/* This will addon letter */}
        {/* <div className='w-full'>
        <p className='font-medium mt-4 text-xsm text-slate-500'>Last Name</p>
        <div className='flex w-full'>
        <select className='p-3 ring-1 ring-black/50 rounded-l'><option>+91</option></select>
        <input type="text" placeholder='Last Name' className='w-full rounded-r focus:outline-none outline-none p-3 ring-1 ring-black/30'/>
        </div>
        </div> */}

        <div className='col-start-1 col-end-3'>
        <p className='font-medium mt-4 text-xsm text-slate-500'>Email</p>
        <input type="text" placeholder='Email' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 w-full rounded p-3 text-xsm'/>
        </div>

        <div className='col-start-1 col-end-3'>
        <p className='font-medium mt-4 text-xsm text-slate-500'>Password</p>
        <input type="text" placeholder='*******' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 w-full rounded p-3 text-xsm'/>
        </div>

        <div className='col-start-1 col-end-3'>
        <p className='font-medium mt-4 text-xsm text-slate-500'>Confirm Password</p>
        <input type="text" placeholder='*******' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 w-full rounded p-3 text-xsm'/>
        </div>

        </div>

        <div className='col-start-1 mt-4 col-end-3'>
        <div className='flex items-center gap-2'><input type="checkbox" placeholder='*******' className=''/>
        <p className='font-medium text-xsm text-center text-gray-400 text-sm'>I agree on <span className='text-red-500'>terms & conditions</span></p></div>
        </div>

        <Link to="/Additioninformation"><button className='w-full p-[14px] mt-8 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Next</button></Link>

        </div>


    </div>
  )
}

export default Signup