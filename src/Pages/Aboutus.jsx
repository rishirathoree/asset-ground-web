import React from 'react'
import officePic from '../assets/abt1.png'
import officePic2 from '../assets/abt2.png'
const Aboutus = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col px-8 lg:py-32 md:py-32 sm:py-28 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
            <div className='lg:w-4/5 md:w-4/5 sm:w-full justify-between flex lg:flex-row md:flex-row sm:flex-col items-start gap-4'>
                <div className='w-full'>
                  <div className='relative'>
                    <img src={officePic} className='lg:w-80 md:w-80 sm:w-full' alt="" />
                    <img src={officePic2} className='lg:block md:block sm:hidden absolute -bottom-28 z-50 w-80 right-20' alt="" />
                    <div className='w-[300px] h-[300px] ring-4 ring-red-600 lg:block md:block sm:hidden  bg-transparent absolute -bottom-[132px] z-[500] right-32'></div>
                  </div>
                </div>
                <div className='w-full space-y-6'>
                  <p className='font-semibold text-4xl'>About Us</p>
                  <p className='font-medium text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum repellat non tempore! Necessitatibus, ullam modi! Aliquid eligendi quibusdam ullam.</p>
                  <p className='font-medium text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum repellat non tempore! Necessitatibus, ullam modi! Aliquid eligendi quibusdam ullam.</p>
                  <p className='font-medium text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum repellat non tempore! Necessitatibus, ullam modi! Aliquid eligendi quibusdam ullam.</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default Aboutus