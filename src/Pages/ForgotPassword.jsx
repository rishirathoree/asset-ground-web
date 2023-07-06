import React from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <div className='w-full h-screen flex justify-center py-12'>
        <div className='p-12 w-1/3 rounded h-min space-y-4 bg-white'>
        
            <p className='font-semibold text-2xl'>Forgot Password</p>
            <p className='font-light lg:w-2/3 md:w-2/3 sm:w-2/3 text-sm'>Enter your email for the verification process,we will send 4 digit code to your email.</p>
            <div>
            <p className='font-semibold text-xsm text-gray-500'>Email</p>
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-full rounded' />
            </div>

            <Link to="/digitCodePage"><button className='w-full p-3 mt-8 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Send Email</button></Link>

        </div>
    </div>
  )
}

export default ForgotPassword