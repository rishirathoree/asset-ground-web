import React, { useState } from 'react'
import banner1 from '../assets/Frame1.png';
import banner2 from '../assets/Frame2.png';
import banner3 from '../assets/Frame3.png';

const Pricing = () => {
    const switches = ['Website','Youtube Channels','Domain Names']
    const [currentActiveSwitch,setCurrentActiveSwitches] = useState(0)
    const contentInformation = [
        {
            heading : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.',
            subheading : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.',
            image:banner1,
            points: ['Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        },

        {
            heading : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.',
            subheading : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.',
            image:banner2,
            points: ['Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        },

        {
            heading : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.',
            subheading : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia eveniet iusto vero quia magni nulla dolorum voluptatibus minima. Quaerat.',
            image:banner3,
            points: ['Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        },
    ]
  return (
    <>
        <div className='flex items-center justify-center flex-col lg:px-20 md:px-12 sm:px-4 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
            <div className='w-full flex-col space-y-6 flex items-start'>
            <ul className="flex flex-wrap items-center">
            {switches.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setCurrentActiveSwitches(index);
                  }}
                  className={`block lg:px-6 md:px-6 sm:px-4 py-4 cursor-pointer text-sm font-semibold ${
                    currentActiveSwitch === index
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

          <div>
            {/* content */}
            {contentInformation.map((item,index)=>{
                return(
                    <>
                    <div className={`${currentActiveSwitch === index ? 'visible relative translate-y-0 z-50 opacity-100 duration-500' : 'invisible absolute translate-y-8 z-0 opacity-0 duration-0'} grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4`}>
                    <div className='space-y-8'>
                        <p className='font-medium text-sm'>{item.heading}</p>
                        <p className='font-medium text-sm'>{item.subheading}</p>
                        <ul className='space-y-4'>
                            {item.points.map((item,index)=>{
                                return(
                                    <>
                                    <li className='gap-4 flex items-center'><i className='bx text-[#0E4B72] bx-sm bx-check-circle'></i><p className='font-semibold text-sm'>{item}</p></li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center'>
                    <img src={item.image} className='w-[500px]' alt="" />
                    </div>
                    </div>
                    </>
                )
            })}
          </div>

            </div>
        </div>
    </>
  )
}

export default Pricing