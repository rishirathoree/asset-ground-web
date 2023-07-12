import React from 'react'
import { Link } from 'react-router-dom'
const Otp = () => {
  return (
    <div className='flex justify-center w-full h-screen items-center flex-col px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8 '>
        <div className='p-12 w- rounded h-min space-y-4 bg-white'>
        
            <p className='font-semibold text-2xl'>Enter 4 Digit Code</p>
            <p className='font-light lg:w-4/5 md:w-2/3 sm:w-2/3 text-sm'>Enter 4 digit code that you received on your email.</p>
            <div className='flex items-center justify-between'>
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-12 h-12 rounded' />
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-12 h-12 rounded' />
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-12 h-12 rounded' />
            <input type="text" className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-12 h-12 rounded' />
            </div>

            <Link to="/resetPassword"><button className='w-full p-3 mt-8 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Continue</button></Link>
            
            <p className='font-medium text-xsm text-center mt-4 text-gray-400 text-sm'>Don't receive OTP ?  <span className='text-red-500'>Resend</span></p>

        </div>
    </div>
  )
}

export default Otp