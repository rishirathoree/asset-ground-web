import React from 'react'
import contactusImage from '../assets/contactus.png'
import ReCAPTCHA from "react-google-recaptcha";

const Contactus = () => {
  return (
   <>
    <div className='flex items-center justify-center flex-col lg:px-20 md:px-12 sm:px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20'>

    <div className='space-y-4 lg:block md:hidden sm:hidden'><img src={contactusImage} className='w-[400px]' alt="" />
    <span className='flex items-center gap-2'><i className='bx p-1 rounded-full text-white bx-phone bg-red-600/80'></i><p className='text-black font-semibold text-sm'>12345 67890</p></span>
    <span className='flex items-center gap-2'><i className='bx p-1 rounded-full text-white bxs-envelope bg-red-600/80'></i><p className='text-black font-normal text-sm'>info@assetground.com</p></span>
    </div>

    <div className=' space-y-6 rounded-lg bg-white shadow-custom p-12'>
        <p className='font-semibold text-2xl'>Contact Us</p>
        <div className='grid grid-cols-2 gap-6'>

            <div className='col-start-1 col-end-3 flex items-center gap-4 w-full'>
            <div className='w-full'> 
                <p className='font-smeibold text-xsm text-gray-400'>First Name</p>
                <input type="text" className='focus:outline-none w-full outline-none ring-1 ring-black/5 p-3 rounded text-xsm text-gray-400' placeholder='First Name' />
            </div>

            <div className='w-full'> 
                <p className='font-smeibold text-xsm text-gray-400'>Last Name</p>
                <input type="text" className='focus:outline-none w-full outline-none ring-1 ring-black/5 p-3 rounded text-xsm text-gray-400' placeholder='Last Name' />
            </div>
            </div>

            <div className='col-start-1 col-end-3 w-full'>
                <p className='font-smeibold text-xsm text-gray-400'>Email</p>
                <input type="email" className='focus:outline-none w-full outline-none ring-1 ring-black/5 p-3 rounded text-xsm text-gray-400' placeholder='Email' />
            </div>

            <div className='w-full col-start-1 col-end-3'>
            <p className='font-light text-xsm text-gray-400'>Phone Number</p>
            <div className='flex items-center w-full'>
                <select className='focus:outline-none outline-none text-gray-400 ring-1 ring-black/5  duration-500 p-4 w-20 rounded-l text-[14px]'><option>+91</option></select>
                <input id='dateInput' type="email" placeholder='Enter Phone Number' className="text-[12px] focus:outline-none outline-none ring-1 ring-black/5  duration-500 p-4 w-full rounded-r" />
            </div>
            </div>

            <div className='flex flex-col gap-2 w-full col-start-1 col-end-3'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Message to us?</label>
                    <textarea id='dateInput' type="email" placeholder='Text Here..' className="resize-none appearance-none h-40 focus:outline-none outline-none ring-1 ring-black/5  duration-500 p-4 w-full rounded text-xsm " />
            </div>
            
            <button className='text-center w-max px-6 py-2 text-white bg-[#0E4B72] rounded-lg'>Send</button>


        </div>
    </div>
    </div>
    </div>
   </>
  )
}

export default Contactus