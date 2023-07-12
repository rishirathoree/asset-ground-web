import React from 'react'
import { Link } from 'react-router-dom'
const ResetPassword = () => {
  return (
    <div className='flex justify-center w-full h-screen items-center flex-col px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8 '>
        <div className='p-12 lg:w-1/3 md:w-2/3 sm:w-full rounded h-min space-y-4 bg-white'>
        
            <p className='font-semibold text-2xl'>Reset Password</p>
            <p className='font-light lg:w-4/5 md:w-2/3 sm:w-2/3 text-sm'>Set the new password for your account soyou can login and access all the features.</p>
            
            <div>
            <p className='font-medium text-xsm text-gray-500'>Password</p>
            <input type="text" placeholder='Password' className='focus:outline-none text-xsm outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded' />
            </div>

            <div>
            <p className='font-medium text-xsm text-gray-500'>Confirm Password</p>
            <input type="text" placeholder='Confirm Password' className='focus:outline-none text-xsm outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded' />
            </div>

            <Link to="/Signup"><button className='w-full p-3 mt-8 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Reset Password</button></Link>

        </div>
    </div>
  )
}

export default ResetPassword