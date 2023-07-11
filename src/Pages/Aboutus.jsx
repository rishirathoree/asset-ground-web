import React from 'react'
import officePic from '../assets/office.png'
const Aboutus = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
            <div className='lg:w-4/5 md:w-4/5 sm:w-full flex-col space-y-8 flex items-center'>
                <div className='grid grid-cols-3 items-center gap-4'>
                <div className='lg:block md:block sm:hidden'><p className='lg:w-2/4 md:w-2/4 sm:w-2/4'>Lorem ipsum dolor sit amet consectetur.</p></div>
                <div className='lg:col-start-2 md:col-start-2 sm:col-start-1 col-end-4'>
                    <p className='font-bold text-3xl'>About Us</p>
                    <p className='font-light text-sm mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima mollitia quae nostrum ab quam hic nulla dolorum aspernatur fugit cumque atque provident libero corrupti laudantium repellendus rerum illo, quos inventore cum perspiciatis. Deserunt aspernatur impedit numquam incidunt deleniti magni? Obcaecati vitae vero temporibus exercitationem explicabo hic debitis nulla eos?</p>
                    <p className='font-light text-sm mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima mollitia quae nostrum ab quam hic nulla dolorum aspernatur fugit cumque atque provident libero corrupti laudantium repellendus rerum illo, quos inventore cum perspiciatis. Deserunt aspernatur impedit numquam incidunt deleniti magni? Obcaecati vitae vero temporibus exercitationem explicabo hic debitis nulla eos?</p>
                </div>
                </div>
                <div>
                    <img src={officePic} className='w-full h-full' alt="" />
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-8'>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab odit officia unde eaque enim illum? Ipsum, numquam laudantium laborum odio doloremque odit voluptates. Optio nobis laboriosam dolor atque consectetur?</p>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab odit officia unde eaque enim illum? Ipsum, numquam laudantium laborum odio doloremque odit voluptates. Optio nobis laboriosam dolor atque consectetur?</p>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab odit officia unde eaque enim illum? Ipsum, numquam laudantium laborum odio doloremque odit voluptates. Optio nobis laboriosam dolor atque consectetur?</p>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab odit officia unde eaque enim illum? Ipsum, numquam laudantium laborum odio doloremque odit voluptates. Optio nobis laboriosam dolor atque consectetur?</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default Aboutus