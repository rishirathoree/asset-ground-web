import React from 'react'

const PersonalInformation = () => {
  return (
    <>
    <div className='p-8 rounded-lg shadow-xl bg-white shadow-black/5'>
        <p className='font-medium text-lg'>Personal Info</p>

        <div className='grid grid-cols-2 gap-4'>

        <div className='lg:col-start-1 lg:col-end-3 flex items-center gap-4 w-full'>
        <div className='pt-3 w-full'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>First Name</p>
            <input type="text" placeholder='Enter First Name' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'/>
        </div>

        <div className='pt-3 w-full'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Last Name</p>
            <input type="text" placeholder='Last Name' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'/>
        </div>
        </div>

        <div className='pt-3 w-full col-start-1 col-end-3'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Email</p>
            <input type="text" placeholder='Enter Email' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'/>
        </div>

        <div className='pt-3 w-full col-start-1 col-end-3'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Where are you located at?</p>
            <select type="text" placeholder='Enter First Name' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'><option>Select Location</option></select>
        </div>

        

        <div className='lg:col-start-1 lg:col-end-3 flex items-center gap-4 w-full'>
        <div className='pt-3 w-full'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Preferred Contact Time</p>
            <select type="text" placeholder='Enter First Name' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'><option>Select Time</option></select>
        </div>

        <div className='pt-3 w-full'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Time Zone</p>
            <select type="text" placeholder='Enter Timezone' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'><option>Select Time Zone</option></select>
        </div>
        </div>

        <div className='lg:col-start-1 lg:col-end-3 pt-3'>
            <p className='text-sm font-medium text-gray-400'>Would you like to receive hot deals via email?</p>
            <div className='flex mt-2 flex-wrap items-center gap-4'>
            <div className="flex items-center">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 " />
                <label for="bordered-radio-1" className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div className="flex items-center">
                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 " />
                <label for="bordered-radio-2" className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
            </div>
            </div>

            <button className='lg:col-start-1 lg:col-end-3 w-full p-3 mt-4 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Save</button>

        
        </div>
    </div>
    </>
  )
}

export default PersonalInformation