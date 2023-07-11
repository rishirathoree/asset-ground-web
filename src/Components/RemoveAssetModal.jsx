import React from 'react'

const RemoveAssetModal = ({removeThisSpecificAsset,setRemoveThisSpecificAsset}) => {
  const removeByOverlay = (e) => { e.target.classList.contains('Overlay') && setRemoveThisSpecificAsset(null) }

  return (
    <>
               <div onClick={removeByOverlay} className={`duration-200 Overlay p-4 w-full h-screen z-[999] top-0 right-0 bg-black bg-opacity-20 fixed flex items-center justify-center
               ${removeThisSpecificAsset ? 'visible opacity-100' : 'invisible opacity-0'}
               `}>
                <div className={`lg:w-2/5 md:w-3/5 sm:w-full relative bg-white p-8 rounded-lg space-y-6 flex items-start justify-center flex-col shadow-custom duration-300 ${removeThisSpecificAsset ? 'translate-y-0' : 'translate-y-8'}`}>
                    <p className='font-semibold text-center text-xl'>Remove Asset</p>

                    <p className='font-semibold text-center text-md'>Lorem ipsum dolor sit amet consectetur.</p>
                    
                    <div className='w-full'>
                        <label className='space-y-2' htmlFor="reason">
                        <p className='font-semibold text-xsm text-gray-400'>Reason</p>
                        <select id='reason' type="text" className='rounded w-full focus:outline-none outline-none ring-1 text-gray-400 text-xsm ring-black/5 duration-500 p-4'><option value="select">Select Reason</option></select>
                        </label>
                    </div>

                    <div className='w-full'>
                        <label className='space-y-2' htmlFor="reasonDescription">
                        <p className='font-semibold text-xsm text-gray-400'>Description</p>
                        <textarea id='reasonDescription' type="text" placeholder='Text Here...' className='w-full resize-none appearance-none h-40 focus:outline-none outline-none rounded ring-1 text-gray-400 text-xsm ring-black/5 duration-500 p-4' />
                        </label>
                    </div>

                    <button className='text-white p-3 text-sm rounded bg-[#0E4B72]'>Cancel Request</button>
                    
                    <span onClick={()=>{setRemoveThisSpecificAsset(null)}} className='p-2 rounded-full bg-orange-400/20 absolute -top-3 right-3 flex items-center text-orange-400'><i className='bx bx-x'></i></span>

                </div>
               </div>
    </>
  )
}

export default RemoveAssetModal