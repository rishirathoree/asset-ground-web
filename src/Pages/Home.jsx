import React from 'react'
import Swiper from '../Components/Swiper'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import arrow from '../assets/vector.png'
const Home = () => {
    const dummyData = Array(10).fill(20)
    return (
    <>
    <Swiper />

    {/*  */}
    <div className='flex items-center justify-center flex-col p-8 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
            
            <div className='text-center mt-8 flex items-center justify-center flex-col'>
            <p className='font-medium text-gray-600 text-sm uppercase'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='font-semibold text-lg uppercase'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='font-normal lg:w-3/4 md:3/4 sm:3/4 text-xsm mt-8 uppercase'>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae blanditiis placeat, aliquam quos explicabo possimus rem quidem, facilis obcaecati iste dignissimos pariatur. Debitis dolorum facilis qui molestiae! Veritatis, excepturi beatae. ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti vel minus dolorem enim dolore blanditiis beatae sed labore quas?</p>
            </div>

            <div>
            <div className='flex items-start justify-center'>
              <div className='flex items-center flex-col space-y-4 text-center'>
              <img src={logo1} className='w-12 rounded-full h-full p-2 shadow-custom' alt="" />
              <p className='font-normal text-xsm w-32 '>Guaranteed satisfaction with customer support and service</p>
              </div>
              <img src={arrow} className='w-full mt-4 h-full w-20 lg:block md:hidden sm:hidden' alt="" />
              <div className='flex items-center flex-col space-y-4 text-center'>
              <img src={logo2} className='w-12 rounded-full h-full p-2 shadow-custom' alt="" />
              <p className='font-normal text-xsm w-32 '>Transfer of 100% safe funds for seller and buyer</p>
              </div>
              <img src={arrow} className='w-full mt-4 h-full w-20 lg:block md:hidden sm:hidden' alt="" />
              <div className='flex items-center flex-col space-y-4 text-center'>
              <img src={logo3} className='w-12 rounded-full h-full p-2 shadow-custom' alt="" />
              <p className='font-normal text-xsm w-32 '>Validation of all properties</p>
              </div>
            </div>
            </div>
        </div>
        {/*  */}

    <section className='flex flex-col items-start text-left lg:px-20 md:px-12 sm:px-4 py-20'>
        <p className='font-bold text-[20px]'>Latest products (250)</p>
        <div className='grid grid-cols-1 py-4 gap-4 w-full'>
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
                <p className='text-[14px] font-normal text-green-500 bg-green-500/10 px-3 py-1 rounded-full'>Active</p>
                </div>
                
                <p className='text-2xl text-red-600 font-bold'>500 USD</p>

                <p className='text-sm font-normal text-gray-400'>Lorem ipsum Lorem ipsum dolor sit amet consecteturn maiores inventore impedit recusandae cumque reiciendis molestias veritatis accusamus. Ad excepturi temporibus sapiente quibusdam mollitia ab soluta dicta, repellendus, obcaecati vitae ipsa, tenetur suscipit. dolore aliquid assumenda perspiciatis non cupimolestiae.</p>

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
                <p className='absolute bottom-0 right-0 cursor-pointer rounded-tl-lg text-sm bg-[#0E4B72] text-white font-medium p-2'>View More</p>
            </div>
                )
            })}
        </div>
        <div className='flex items-center justify-center w-full'>
        <button className='text-center p-3  text-white bg-[#0E4B72] w-max rounded-lg'>View More Items</button>
        </div>
    </section>
    </>
  )
}

export default Home



