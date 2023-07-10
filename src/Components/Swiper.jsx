import React, { useEffect, useState } from 'react';
import car2 from '../assets/lamp1.jpg';
import car3 from '../assets/lamp2.jpg';
import car1 from '../assets/lamp3.jpg';

const Swiper = () => {
  const Arrayss = [
    {  title: 'title2', img: car1 },
    {  title: 'title1', img: car3 },
    {  title: 'title2', img: car2 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const swiperModal = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Arrayss.length);
      
    };

    const interval = setInterval(swiperModal, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [Arrayss.length]);



  return (
    <>
      <div className='w-full overflow-x-auto h-[300px] text-center mt-[84px]  duration-500 bg-gray-100 flex items-center'>
        {Arrayss.map((item, index) => (
          <div className={`w-full h-full overflow-hidden overflow-x-auto ${currentIndex === index ? 'relative  opacity-100 z-50' : 'absolute  opacity-0 z-0'}`} key={index}>
            <img
              src={item.img}
              className={`w-full h-full duration-1000 object-cover ${currentIndex === index ? ` opacity-100 z-50` : 'opacity-50 z-0'}`}
              alt=''
            />
            <div className='p-2 rounded-full flex gap-2 duration-500 bg-gray-300  absolute z-[100] left-1/2  bottom-4'>
              {Arrayss.map((item,index)=>{
                return(
                  <div onClick={()=>{setCurrentIndex(index)}} className={`w-2 h-2 cursor-pointer bg-gray-100 duration-500 shadow-custom rounded-full ${currentIndex === index ? 'w-6' : ''}`}></div>
                )
              })}
            </div>
              <i onClick={()=>{setCurrentIndex(p=> p !== 0 ? p-1 : p )}} className='bx bx-chevron-left absolute top-1/2 left-0 py-6 px-2 bg-gray-200/20 rounded-r-lg'></i>
              <i onClick={()=>{setCurrentIndex(p=> p !== Arrayss.length -1 ? p+1 : p )}} className='bx bx-chevron-right absolute top-1/2 right-0 py-6 px-2 bg-gray-200/20 rounded-r-lg'></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default Swiper;
