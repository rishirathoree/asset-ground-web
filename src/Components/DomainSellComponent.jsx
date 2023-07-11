import React, { useState } from 'react'
import searchLogo from '../assets/searchLogo.png'

const DomainSellComponent = () => {
    const [steps,setSteps] = useState(0)
    console.log(steps)
  return (
    <>
    
    <p className='font-normal text-lg'>{steps === 0 ? 'Select Your Business Type' : steps == 1 ? 'Contact Information' : null }</p>
            {/* about business */}
            {steps == 0 && 
            <>
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="youtube-channel">Asset Title</label>
                    <input type="text" placeholder='Enter Asset Title' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>

            
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Description</label>
                    <textarea id='dateInput' type="text" placeholder='Text Here...' className="h-40 appearance-none resize-none focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>

            <div className='flex flex-col gap-2 relative'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Age</label>
                    <input id='dateInput' type="text" placeholder='MM/YYYY' className="peer focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
                    <label htmlFor="dateInput" className='duration-500 peer-focus:opacity-0 peer-focus:invisible'><i className='bx bx-calendar z-50 absolute top-11 text-red-500 right-3 bg-white'></i></label>
            </div>

            <div className='flex flex-col gap-2 relative'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Expiry date</label>
                    <input id='dateInput' type="text" placeholder='MM/YYYY' className="peer focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
                    <label htmlFor="dateInput" className='duration-500 peer-focus:opacity-0 peer-focus:invisible'><i className='bx bx-calendar z-50 absolute top-11 text-red-500 right-3 bg-white'></i></label>
            </div>
            
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="youtube-channel">Register for</label>
                    <input type="text" placeholder='Text here..' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Asking price</label>
                    <input type="text" placeholder='00' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>

            <div className='p-8 cursor-pointer rounded-lg border-dashed border-2 border-pink-500/40 bg-pink-500/5'>
            <label htmlFor="uploadPhotos" className='flex flex-col items-center justify-center'>
            <i className='bx bx-lg bx-upload text-pink-500/70'></i>
            <p className='font-semibold text-gray-400 text-sm'>Upload Photos</p>
            <input type="file" className='hidden' id='uploadPhotos' />
            </label>
            </div>

            <div className="slect-allchk flex gap-2 items-center">
                    <label>
                        <input type="checkbox" name="checkbox" />
                        <span></span>
                    </label>
                    <p className='font-semibold text-xsm text-gray-800'>I need help deciding the asking price (We will contact you to help you evaluate the price)</p>
                </div> 

            </>
            }

            

            {steps == 1 && 
            <>
            <span className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Domain name</label>
                    <input id='dateInput' type="text" placeholder='Enter Domain name' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Last Name</label>
                    <input id='dateInput' type="text" placeholder='Enter Last Name' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>
            </span>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Enter Email</label>
                    <input id='dateInput' type="email" placeholder='Enter Email' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>

            <div>
            <p className='font-light text-xsm text-gray-400'>Phone Number</p>
            <div className='flex items-center'>
                <select className='focus:outline-none outline-none text-gray-400 ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-20 rounded-l text-[14px]'><option>+91</option></select>
                <input id='dateInput' type="email" placeholder='Enter Phone Number' className="text-[12px] focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded-r" />
            </div>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Message to us?</label>
                    <textarea id='dateInput' type="email" placeholder='Text Here..' className="resize-none appearance-none h-40 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm text-gray-400 " />
            </div>
            </>
            }

            {steps === 2 && 
            <>
            <div className='flex items-center py-20 space-y-6 flex-col justify-center '>
                <img src={searchLogo} alt="" />
                <p className='font-bold text-3xl'>Under Review</p>

                <p className='font-medium text-center text-md'>Your product is under review. We may contact you <br /> for auditing purposes.</p>
                <p className='font-medium text-center text-md'>You will be notified once its published</p>

            <button className='cursor-pointer font-medium text-sm px-6 py-3 rounded text-white bg-[#0E4B72] ring-1 ring-black/5'>Back to Marketplace</button>

            </div>
            </>
            }

            {steps <= 2 && <div className='gap-4 flex items-center'>             
            <button disabled={steps==0} onClick={()=>{setSteps(p=> p - 1);}} className='cursor-pointer font-medium text-sm px-6 py-3 rounded text-[#0E4B72] ring-1 ring-black/5'>Back</button>
            <button disabled={steps==2} onClick={()=>{setSteps(p=> p + 1)}} className='font-medium text-white text-sm px-6 py-3 rounded bg-[#0E4B72]'>Next</button>
            </div> }
    </>
  )
}

export default DomainSellComponent