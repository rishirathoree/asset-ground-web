import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import arrow from '../assets/vector.png'
const InterestedPage = () => {
  return (
    <>
    <div className='lg:px-20 md:px-12 sm:px-4 py-8 flex items-center justify-center'>
        <div className='flex items-center justify-center flex-col p-8 bg-white shadow-custom shadow-black/5 lg:w-2/3 md:w-2/3 sm:w-full rounded-lg space-y-8'>
            <p className='font-semibold text-lg uppercase'>Interested</p>
            <div className='lg:w-2/4 md:w-2/4 sm:w-full text-center'>
            <p>Hit the below button "Start" to let one of customer advisor contact you to start the buying process.</p>
            <p className='text-red-500'>Or</p>
            <p>Hit need more info button to ask for a specific detail before starting the buying process</p>
            </div>

            <div>
            <div className='flex items-start justify-center'>
              <div className='flex items-center flex-col space-y-4 text-center'>
              <img src={logo1} className='w-12 rounded-full h-full p-2 shadow-custom' alt="" />
              <p className='font-normal text-xsm w-32 '>Guaranteed satisfaction with customer support and service</p>
              </div>
              <img src={arrow} className='mt-4 h-full w-20 lg:block md:hidden sm:hidden' alt="" />
              <div className='flex items-center flex-col space-y-4 text-center'>
              <img src={logo2} className='w-12 rounded-full h-full p-2 shadow-custom' alt="" />
              <p className='font-normal text-xsm w-32 '>Transfer of 100% safe funds for seller and buyer</p>
              </div>
              <img src={arrow} className='mt-4 h-full w-20 lg:block md:hidden sm:hidden' alt="" />
              <div className='flex items-center flex-col space-y-4 text-center'>
              <img src={logo3} className='w-12 rounded-full h-full p-2 shadow-custom' alt="" />
              <p className='font-normal text-xsm w-32 '>Validation of all properties</p>
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InterestedPage