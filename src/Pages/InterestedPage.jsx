import React, { useState } from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import arrow from '../assets/vector.png'
import { Link } from 'react-router-dom'
import NeedMoreInfo from '../Components/NeedMoreInfo'

const InterestedPage = () => {
  const [NeedMoreInfos,setNeedMoreInfos] = useState(false)
  return (
    <>
    {NeedMoreInfos ? 

    <NeedMoreInfo/> 
    
    : 
    <>
    <div className='lg:px-20 md:px-12 sm:px-4 lg:py-32 md:py-32 sm:py-20 flex items-center justify-center'>
        <div className='flex items-center justify-center flex-col p-8 bg-white shadow-custom shadow-black/5 lg:w-max md:w-2/3 sm:w-full rounded-lg space-y-8'>
            <p className='font-semibold text-lg uppercase'>Interested</p>
            <div className='lg:w-3/4 md:w-3/4 sm:w-full text-center'>
            <p>Hit the below button "Start" to let one of customer advisor contact you to start the buying process.</p>
            <p className='text-red-500'>Or</p>
            <p>Hit need more info button to ask for a specific detail before starting the buying process</p>
            </div>

            <div className='flex lg:flex-row md:flex-row sm:flex-col gap-4 items-start justify-center'>
              <div className='flex items-center flex-col space-y-4 text-center'>
              <div className='rounded-full h-full p-4 shadow-custom'>
              <img src={logo1} className='' alt="" />
              </div>
              <p className='font-normal text-xsm w-32 '>Guaranteed satisfaction with customer support and service</p>
              </div>
              <img src={arrow} className=' mt-8 h-full w-24 lg:block md:hidden sm:hidden' alt="" />
              <div className='flex items-center flex-col space-y-4 text-center'>
              <div className='rounded-full h-full p-4 shadow-custom'>
              <img src={logo2} alt="" />
              </div>
              <p className='font-normal text-xsm w-32 '>Transfer of 100% safe funds for seller and buyer</p>
              </div>
              <img src={arrow} className=' mt-8 h-full w-24 lg:block md:hidden sm:hidden' alt="" />
              <div className='flex items-center flex-col space-y-4 text-center'>
              <div className='rounded-full h-full p-4 shadow-custom'>
              <img src={logo3} alt="" />
            </div>
              <p className='font-normal text-xsm w-32 '>Validation of all properties</p>
              </div>
            </div>
            
            <div className='pt-8 '>
  <button className='font-medium text-white text-sm px-12 py-3 rounded bg-[#0E4B72]'>Start</button>
  <span onClick={()=>{setNeedMoreInfos(true)}} className='cursor-pointer font-normal text-sm p-4 rounded text-[#0E4B72]'>Need More Info?</span>
</div>
        </div>
    </div>
    </>}
    </>
  )
}

export default InterestedPage