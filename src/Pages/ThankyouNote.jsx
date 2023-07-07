import React, { useState } from 'react'

const ThankyouNote = () => {
  return (
    <>
    <div className='flex items-center h-screen justify-center'>
    <div className='flex items-center justify-center  h-2/3 flex-col bg-white px-12 py-24 shadow-custom rounded-lg'>
            <p className='font-semibold text-3xl uppercase'>Thank You</p>
            <p className='w-3/5 mt-4 text-center'>One of customer advisor contact you to start the buying process.</p>
            <div className=''>
                <button className='font-medium mt-20 text-white text-sm px-12 py-3 rounded bg-[#0E4B72]'>Back to Marketplace</button>
            </div>
            </div>
    </div>
    </>
  )
}

export default ThankyouNote