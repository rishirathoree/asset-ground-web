import React from "react";

const NeedMoreInfo = () => {
  return (
    <>
      <div className="flex items-center lg:px-20 md:px-12 sm:px-4 py-20 justify-center">
        <div className="shadow-custom p-8 rounded-lg lg:w-2/4 md:w-2/4 sm:w-full h-full bg-white">
            <p className="font-semibold text-center text-2xl">Need More Info?</p>
            <div className='pt-6'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Title</p>
            <input type="text" placeholder="Enter Product Title" className='text-sm focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-full rounded'/>
            </div>

            <div className='pt-6'>
            <p className='font-medium text-xsm text-gray-400 text-sm'>Description</p>
            <textarea type="text" placeholder="Text Here..." className='text-sm h-40 resize-none appearance-none focus:outline-none outline-none ring-1 ring-black/5 focus:ring-black/20 duration-500 p-2 w-full rounded'/>
            </div>

            <div className='flex items-center gap-2'>
            <input type="checkbox" placeholder="Text Here..." className='text-sm focus:outline-none outline-none duration-500 rounded'/>
            <div className="flex items-center gap-1">
            <i className="bx bx-phone text-red-400"></i>
            <p className='font-semibold text-sm'>Also request a call from our presentative </p>
            </div>
            </div>

            <button className=' p-3 mt-10 text-xsm font-medium rounded text-white bg-[#0E4B72]'>Request Info</button>

        </div>
      </div>
    </>
  );
};
export default NeedMoreInfo;
