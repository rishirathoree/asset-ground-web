import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    const dummyData = Array(5).fill(1)
    const switches = ['Website','Youtube Channels','Domain Names','All']
    const [currentActiveSwitch,setCurrentActiveSwitches] = useState('Website')
    
  return (
    <>
    <div className='lg:px-20 md:px-12 sm:px-4 lg:py-32 md:py-32 sm:py-20 space-y-4'>
        <div className='flex lg:flex-row md:flex-col  sm:flex-col lg:items-center md:items-center sm:items-start justify-between gap-4'>
        <div>
          <ul className="flex flex-wrap items-center">
            {switches.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setCurrentActiveSwitches(item);
                  }}
                  className={`block lg:px-6 md:px-6 sm:px-4 py-4 cursor-pointer text-sm font-semibold ${
                    currentActiveSwitch === item
                      ? "bg-red-600 text-white"
                      : "bg-red-600/20 text-red-500"
                  }`}
                >
                  <p className="w-max lg:text-sm md:text-sm sm:text-[14px]">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flex items-center gap-4'>
            {/* Search Input */}
            <div className='bg-white lg:w-min md:w-32 sm:w-min flex items-center gap-2 p-3 ring-1 ring-red-500/10'>
            <i className='bx text-red-500/50 bx-search'></i>
            <input type="text" className='lg:w-min md:w-20 sm:w-min font-normal text-md text-normal text-gray-400 focus:outline-none outline-none' placeholder='Search' />
            </div>

            <select className='lg:w-40 md:w-40 sm:w-min p-[15px] ring-1 font-normal text-sm text-normal text-gray-400 focus:outline-none outline-none ring-red-500/10'><option value="Sort By">Sort By</option></select>
        </div>
        </div>

        {dummyData.map((item)=>{
                return(
                    <div className='p-4 relative shadows space-y-2 shadow-gray-200 bg-white w-full'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <p className='text-xsm font-normal'>#27376</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='bx bx-laptop text-orange-500/50'></i>
                            <p className='text-xsm font-normal'>Website</p>
                        </div>
                    </div>
                    <p className='text-xsm font-normal'>5 Days Ago</p>

                </div>

                <div className='flex items-center justify-between'>
                <p className='text-sm font-medium lg:w-2/3 md:2/3 sm:w-2/3'>Lorem ipsum dolore aliquid assumenda perspiciatis non cupimolestiae.</p>

                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>      
            </div>
                
                <p className='text-lg text-red-600 font-normal'>500 USD</p>


                <p className='text-sm font-medium text-gray-400'>Lorem ipsum Lorem ipsum dolor sit amet consecteturn maiores inventore impedit recusandae cumque reiciendis molestias veritatis accusamus. Ad excepturi temporibus sapiente quibusdam mollitia ab soluta dicta, repellendus, obcaecati vitae ipsa, tenetur suscipit. dolore aliquid assumenda perspiciatis non cupimolestiae.</p>

                <div className='flex lg:flex-row md:flex-row sm:flex-col gap-8'>
                    <div>
                    <p className='text-sm text-gray-400 font-medium w-max'>Niche</p>
                    <p className='text-md text-gray-600 font-bold'>Niche</p>
                    </div>
                    <div>
                    <p className='text-sm text-gray-400 font-medium w-max'>Monthly Revenue</p>
                    <p className='text-md text-gray-600 font-bold'>100 USD</p>
                    </div>
                    <div>
                    <p className='text-sm text-gray-400 font-medium w-max'>Monthly Net Profit</p>
                    <p className='text-md text-gray-600 font-bold'>100 USD</p>
                    </div>
                    <div>
                    <p className='text-sm text-gray-400 font-medium w-max'>Multiple</p>
                    <p className='text-md text-gray-600 font-bold'>5x</p>
                    </div>
                </div>
                <Link to="/productPage"><p className='absolute bottom-0 right-0 cursor-pointer rounded-tl-lg text-sm bg-[#0E4B72] text-white font-medium p-2'>View More</p></Link>
            </div>
                )
            })}
            <div className='mt-4 flex justify-end'>
                <span className='w-min p-4 justify-center h-12 hover:bg-[#0E4B72] hover:text-white text-center flex items-center gap-2 bg-gray-100 ring-1 ring-black/5 '><i className='bx bx-left-arrow-alt '></i>Prev</span>
                {dummyData.slice(1,8).map((item,index)=>{
                    return(
                        <span className='w-12 hover:bg-white  flex items-center justify-center h-12 text-center bg-gray-100 ring-1 ring-black/5'>{index}</span>
                    )
                })}
                {dummyData.length > 6 && <span className='w-12 hover:bg-white justify-center h-12 text-center flex items-center gap-2 bg-gray-100 ring-1 ring-black/5 '>...</span>}
                <span className='w-min p-4 justify-center h-12 hover:bg-[#0E4B72] hover:text-white text-center flex items-center gap-2 bg-gray-100 ring-1 ring-black/5 '><i className='bx bx-right-arrow-alt '></i>Next</span>
            </div>
    </div>
    </>
  )
}

export default Dashboard