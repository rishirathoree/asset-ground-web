import React, { useEffect, useState } from 'react'
import YoutubeChannel from '../Components/YoutubeChannel'
import AddWebsiteFormComponent from '../Components/AddWebsiteFormComponent'
import DomainSellComponent from '../Components/DomainSellComponent'

const Sell = () => {
      const [selectedBusinessType,setSelectedBusinessType] = useState('Select Business Type')
      
  return (
    <>
    <div className='flex items-center justify-center flex-col px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
        <div className='bg-white shadow-custom py-6 px-12 lg:w-2/3 md:w-2/3 sm:w-full rounded-lg'>
            <div className='mt-4'>
            {/* <form> */}
            <div className='space-y-6'>
                {selectedBusinessType === 'Select Business Type' &&
                 <div>
                 <p className='text-xsm font-medium text-gray-400'>Business Type?</p>
                 <select type="text" onChange={(e)=>{setSelectedBusinessType(e.target.value)}} className="text-sm font-light text-gray-400 focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-4 w-full rounded text-xsm "><option value="Select Business Type">Select Channel</option><option value="Youtube Channel">Youtube Channel</option><option value="Website">Website</option><option value="Domain Name">Domain Name</option></select>
             </div>
                 }

                {selectedBusinessType === 'Youtube Channel' && <YoutubeChannel/>}
                {selectedBusinessType === 'Domain Name' && <DomainSellComponent/>}
                {selectedBusinessType === 'Website' && <AddWebsiteFormComponent/>}


            </div>

            {/* </form> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Sell