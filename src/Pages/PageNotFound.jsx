import React from 'react'
import pageNotFoundImage from '../assets/pnf2.png'
const PageNotFound = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
            <div className='flex items-center justify-center flex-col lg:w-4/5 md:w-4/5 sm:w-full space-y-6'>
                <div><img src={pageNotFoundImage} alt="" /></div>
                <p className='font-bold text-4xl text-center'>Page Not Found</p>
                </div>
                </div>
    </>
  )
}

export default PageNotFound