import React, { useState } from 'react'
import searchLogo from '../assets/searchLogo.png'

const YoutubeChannel = () => {
    const [steps,setSteps] = useState(0)
  return (
    <>
    
    <p className='font-normal text-lg'>{steps === 0 ? 'Select Your Business Type' : steps === 1 ? 'About Business' :  steps === 2 ? 'Audience & Profitability' : steps === 3 ? 'Contact Information' : null}</p>
            {/* about business */}
            {steps == 0 && 
            <>
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="youtube-channel">Asset Title</label>
                    <input type="text" placeholder='Enter Asset Title' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="youtube-channel">Channel Name</label>
                    <input type="text" placeholder='Enter Channel Name' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Channel URL</label>
                    <input type="text" placeholder='Enter Channel URL' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Number of Published Videos</label>
                    <select type="text" className="text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select Niche</option></select>
            </div>
            
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Number of Published Videos</label>
                    <input type="text" placeholder='Enter Number of Published Videos' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2 relative'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Creation Days</label>
                    <input id='dateInput' type="text" placeholder='MM/YYYY' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
                    <label htmlFor="dateInput"><i className='bx bx-calendar z-50 absolute top-11 text-red-500 right-3 bg-white'></i></label>
            </div>

            <div className='flex items-center gap-4 justify-between w-full'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Channel Strike?</label>
                    <select type="text" className="text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">None</option></select>

            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Channel Warning?</label>
                    <select type="text" className="text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">None</option></select>
            </div>
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Assets Included</label>
                    <div className='flex items-center gap-2'>
                    <input id='dateInput' type="text" placeholder='Text Here...' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
                    <i className='bx bx-plus p-2 rounded-full bg-red-500/30'></i>
                    </div>
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Description</label>
                    <textarea id='dateInput' type="text" placeholder='Text Here...' className="h-40 appearance-none resize-none focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </>
            }

            {steps == 1 && 
            <>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Countries of the Majority of users?</label>
                    <select type="text" className="apperance-none text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select Country</option></select>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Main Language of the Channel</label>
                    <select type="text" className="apperance-none text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select Language</option></select>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Second Language of the Channel</label>
                    <select type="text" className="apperance-none text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select Language</option></select>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Number of Subscriber</label>
                    <input id='dateInput' type="text" placeholder='Text Here...' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div>

            </div>

            <div>
                <p className='font-light text-xsm text-gray-400'>Since when is it monetized?</p>
                    <span className='flex items-center gap-4 mt-2'>
                    <div className="slect-allchk flex gap-2 items-center">
                    <label>
                        <input type="checkbox" name="checkbox" />
                        <span></span>
                    </label>
                    <p className='font-light text-xsm text-gray-400'>Yes</p>
                </div>

                <div className="slect-allchk flex gap-2 items-center">
                    <label>
                        <input type="checkbox" name="checkbox" />
                        <span></span>
                    </label>
                    <p className='font-light text-xsm text-gray-400'>No</p>
                </div> 
                </span>
            </div>

            <div className='flex flex-col gap-2 relative'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Since when is it monetized?</label>
                    <input id='dateInput' type="text" placeholder='MM / YYYY' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
                    <label htmlFor="dateInput"><i className='bx bx-calendar z-50 absolute top-10 text-red-500 right-3 bg-white'></i></label>
            </div>

                <span className='w-full flex lg:flex-row md:flex-row sm:flex-col items-center gap-2'>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Revenue from last 30 days</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Revenue from last 12 months</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
                </span>

                <span className='w-full flex lg:flex-row md:flex-row sm:flex-col items-center gap-4'>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Asking price</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Multiple</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
                </span>

                <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Reason for sale</label>
                    <textarea id='dateInput' type="text" placeholder='Text Here...' className="h-40 appearance-none resize-none focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='p-8 cursor-pointer rounded-lg border-dashed border-2 border-pink-500/40 bg-pink-500/5'>
            <label htmlFor="uploadPhotos" className='flex flex-col items-center justify-center'>
            <i className='bx bx-lg bx-upload text-pink-500/70'></i>
            <p className='font-semibold text-gray-400 text-sm'>Upload Photos</p>
            <input type="file" className='hidden' id='uploadPhotos' />
            </label>
            </div>
            
            <div className='flex items-center gap-2'>
            <div className="slect-allchk flex gap-2 items-center">
                    <label>
                        <input type="checkbox" name="checkbox" />
                        <span></span>
                    </label>
                    <p className='font-medium text-sm'>I need help deciding the asking price (We will contact you to help you evaluate the price)</p>
                </div>
            </div>
            </>
            }

            {steps == 2 && 
            <>
            <span className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">First Name</label>
                    <input id='dateInput' type="text" placeholder='Enter First Name' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Last Name</label>
                    <input id='dateInput' type="text" placeholder='Enter Last Name' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </span>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Enter Email</label>
                    <input id='dateInput' type="email" placeholder='Enter Email' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
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
                    <textarea id='dateInput' type="email" placeholder='Text Here..' className="resize-none appearance-none h-40 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </>
            }

            {steps === 3 && 
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

            {steps <= 3 && <div className='gap-4 flex items-center'>             
            <button disabled={steps==0} onClick={()=>{setSteps(p=> p - 1);}} className='cursor-pointer font-medium text-sm px-6 py-3 rounded text-[#0E4B72] ring-1 ring-black/5'>Back</button>
            <button disabled={steps==3} onClick={()=>{setSteps(p=> p +1)}} className='font-medium text-white text-sm px-6 py-3 rounded bg-[#0E4B72]'>Next</button>
            </div> }
    </>
  )
}

export default YoutubeChannel