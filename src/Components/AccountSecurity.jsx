import React from 'react'

const AccountSecurity = () => {
  return (
    <>
    <div className='p-8 rounded-lg shadow-xl bg-white shadow-black/5'>
        <p className='font-medium text-2xl'>Security</p>

        <div className='grid grid-cols-1 gap-4 mt-6'>

        <div className='pt-3 w-full col-start-1 col-end-3'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Password</p>
            <input type="text" placeholder='*****' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'/>
        </div>

        <div className='pt-3 w-full col-start-1 col-end-3'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>New Password</p>
            <input type="password" placeholder='********' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'/>
        </div>

        <div className='pt-3 w-full col-start-1 col-end-3'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Confirm New Password</p>
            <input type="password" placeholder='********' className='focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-3 w-full rounded text-xsm'/>
        </div>

            <button className=' w-full p-3 mt-4 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Save</button>

        
        </div>
    </div>
    </>
  )
}

export default AccountSecurity;