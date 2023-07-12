import React from 'react'
import { Link } from 'react-router-dom'
const AdditionInformation = () => {
    const addLoginStatusToLocalStorage = () => {
        const logged = localStorage.getItem('id')
        if(!logged){
            localStorage.setItem('user','Admin')
        }
    }
  return (
    <div className='w-full h-full flex justify-center lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full'>
        <div className='p-16 lg:w-3/6 md:w-4/6 sm:w-4/5 rounded shadow-xl shadow-gray-100/70 h-min space-y-6 bg-white'>
        
            <p className='font-semibold text-2xl'>Additional Information</p>

            <div>
            <p className='text-sm font-medium text-gray-400'>Who are you?</p>
            <div className='flex mt-2 flex-wrap items-center gap-4'>
            <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>Individual</i>
                    </span>
                </label>
            </div>

            <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>Company</i>
                    </span>
                </label>
            </div>

            </div>
            </div>

            <div className='mt-6'>
            <p className='text-sm font-medium text-gray-400'>What are you interested in?</p>
            <div className='flex mt-2 flex-wrap items-center gap-4'>
            <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>Buying Digital Assets</i>
                    </span>
                </label>
            </div>
            
            <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>Selling Digital Assets</i>
                    </span>
                </label>
            </div>
            <div class="rdobtn-card">
                <label>
                    <input type="radio" name="Activity" />
                    <span><em></em>
                        <i>Both</i>
                    </span>
                </label>
            </div>

            </div>
            </div>

            <div className='mt-6 w-full'>
            <p className='text-sm font-medium text-gray-400'>Where are you located?</p>
            <div className='flex mt-2 flex-wrap items-center gap-4'>
            <div className="flex items-center w-full">
            <select className="w-full rounded ring-1 text-sm text-gray-400 p-4 ring-black/5 focus:outline-none outline-none"><option value="Select">Select</option></select>
            </div>
            </div>
            </div>

            <div className='mt-6 grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 w-full'>
            <div className="flex flex-col w-full">
            <p className='text-sm font-medium text-gray-400'>Preferred contact time</p>
            <select className="w-full rounded ring-1 text-sm text-gray-400 p-4 ring-black/5 focus:outline-none outline-none"><option value="Select">Select</option></select>
            </div>

            <div className="flex flex-col w-full">
            <p className='text-sm font-medium text-gray-400'>Time Zone</p>
            <select className="w-full rounded ring-1 text-sm text-gray-400 p-4 ring-black/5 focus:outline-none outline-none"><option value="Select">Select</option></select>
            </div>
            </div>

            <div>
            <p className='text-sm font-medium text-gray-400'>Would you like to receive hot deals via email?</p>
            <div className='flex mt-2 flex-wrap items-center gap-4'>
            
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

            </div>
            </div>
            


            <Link to="/dashboard"><button onClick={addLoginStatusToLocalStorage} className='w-full p-3 mt-8 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Create my account</button></Link>

        </div>
    </div>
  )
}

export default AdditionInformation