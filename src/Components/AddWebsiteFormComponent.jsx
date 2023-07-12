import React, { useState } from 'react'
import searchLogo from '../assets/searchLogo.png'

const AddWebsiteFormComponent = () => {
    const [steps,setSteps] = useState(0)
    console.log(steps)
  return (
    <>
    
    <p className='font-normal text-lg'>{steps === 0 ? 'About Business' : steps === 1 ? 'Audience' :  steps === 2 ? 'Profitability' : steps === 3 ? 'Contact Information' : null}</p>
            {/* about business */}
            {steps == 0 && 
            <>
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="youtube-channel">Asset Title</label>
                    <input type="text" placeholder='Enter Asset Title' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="youtube-channel">Website URL</label>
                    <input type="text" placeholder='Enter Website URL' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Field">Field</label>
                    <select type="text" placeholder='Enter Field' className="focus:outline-none outline-none ring-1 ring-black/5 text-gray-400 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="Select Field">Select Field</option></select>
            </div>

            <div className='flex flex-col gap-2 relative'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Starting Date</label>
                    <input id='dateInput' type="text" placeholder='MM/YYYY' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
                    <label htmlFor="dateInput"><i className='bx bx-calendar z-50 absolute top-11 text-red-500 right-3 bg-white'></i></label>
            </div>
            
            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">How many hours a week you work on the website </label>
                    <input type="text" placeholder='00:00' className="focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div className='flex flex-col gap-2 relative'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Creation Days</label>
                    <input id='dateInput' type="text" placeholder='MM/YYYY' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
                    <label htmlFor="dateInput"><i className='bx bx-calendar z-50 absolute top-11 text-red-500 right-3 bg-white'></i></label>
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
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Website Language</label>
                    <select type="text" className="apperance-none text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select Language</option></select>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Second Language of the Channel</label>
                    <select type="text" className="apperance-none text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select Language</option></select>
            </div>

            <span className='w-full flex lg:flex-row md:flex-row sm:flex-col items-center gap-2'>
                <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Avg. Monthly Page View</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Avg. Monthly Users</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
                </span>

            <div>

            </div>

            

            <div className='flex flex-col gap-2'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="dateInput">Reason for sale</label>
                    <textarea id='dateInput' type="text" placeholder='Text Here...' className="h-40 appearance-none resize-none focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <div>
                <p className='font-light text-xsm text-gray-400'>Do you have an analytics tool an your website?</p>
                    <span className='flex items-center gap-4 mt-2'>
                    <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>Yes</i>
                    </span>
                </label>
            </div>

            <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>No</i>
                    </span>
                </label>
            </div>
                </span>
                <p className='font-light mt-2 text-xsm text-gray-400'>If yes, please provide read access to <span className='font-bold text-black'>example@example.com</span></p>
              
            </div>

            

                

            <div className='p-8 cursor-pointer rounded-lg border-dashed border-2 border-pink-500/40 bg-pink-500/5'>
            <label htmlFor="uploadPhotos" className='flex flex-col items-center justify-center'>
            <i className='bx bx-lg bx-upload text-pink-500/70'></i>
            <p className='font-semibold text-gray-400 text-sm'>Upload Photos</p>
            <input type="file" className='hidden' id='uploadPhotos' />
            </label>
            </div>
            
            </>
            }

            {steps == 2 && 
            <>
            

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">How is website monetized?</label>
                    <select id='dateInput' type="email" placeholder='' className="text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">Select</option></select>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Do you have employees</label>
                    <select id='dateInput' type="email" placeholder='' className="text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="">00</option></select>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">How many suppliers do you work with and where are they located?</label>
                    <input id='dateInput' type="text" placeholder='Text here...' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>

            <span className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Revenue from last 30 days</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Net profit last 3 months</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </span>

            <span className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Revenue from last 6 months</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Net profit last 6 months</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </span>

            <span className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Revenue from last 12 months</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Net profit last 12 months</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </span>

            <span className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Asking Price</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light text-xsm text-gray-400' htmlFor="Channel URl">Multiple</label>
                    <input id='dateInput' type="text" placeholder='00' className=" focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
            </div>
            </span>

            <div className='flex flex-col gap-2 w-full'>
                    <label className='font-light lg:w-4/6 md:w-4/6 sm:w-full text-xsm text-gray-400' htmlFor="Channel URl">Do you currently have inventory for this business? Where is it located? If so, how many products? How much is it worth at wholesale price? At retail price?</label>
                    <textarea id='dateInput' type="email" placeholder='Text Here..' className="resize-none appearance-none h-40 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm " />
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

            {steps == 3 && 
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

            {steps === 4 && 
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

            {steps <= 4 && <div className='gap-4 flex items-center'>             
             <button disabled={steps == 0} onClick={()=>{setSteps(p=> p - 1);}} className='cursor-pointer font-medium text-sm px-6 py-3 rounded text-[#0E4B72] ring-1 ring-black/5'>Back</button>
            <button disabled={steps == 4} onClick={()=>{setSteps(p=> p + 1)}} className='font-medium text-white text-sm px-6 py-3 rounded bg-[#0E4B72]'>Next</button>
            </div> }
    </>
  )
}

export default AddWebsiteFormComponent