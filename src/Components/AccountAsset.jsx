import React from 'react'

const AccountAsset = () => {
    const dummyData = Array(4).fill(1)
  return (
    <>
    <div className='p-8 rounded-lg shadow-xl bg-white shadow-black/5'>
        <p className='font-medium text-2xl'>My Favourites</p>

        <div className='grid grid-cols-1 gap-4 mt-6'>
        {dummyData.map((item)=>{
                return(
                <div className='p-6 rounded relative shadow-lg ring-1 ring-black/5 space-y-2 shadow-gray-200/40 bg-white w-full'>
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
                    <div>
                        <i className='bx bx-edit text-blue-500'></i>
                        <i className='bx bx-trash text-orange-500'></i>
                    </div>

                </div>

                <div className='flex items-center justify-between'>
                <p className='text-sm font-medium lg:w-3/4 md:3/4 sm:w-2/3'>Lorem ipsum dolore aliquid assumenda perspiciatis non cupimolestiae.</p>
                <p className='text-[14px] font-normal text-green-500 bg-green-500/10 px-2 py-1 rounded-full'>Active</p>
                </div>
                
                <p className='text-2xl text-red-600 font-bold'>500  USD</p>
                
            </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default AccountAsset;