import React, { useEffect, useState } from 'react';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';

const Swiper = () => {
  const Arrayss = [
    {  title: 'title1', img: car1 },
    {  title: 'title2', img: car2 }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const swiperModal = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Arrayss.length);
    };

    const interval = setInterval(swiperModal, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [Arrayss.length]);

  console.log(currentIndex);

  return (
    <>
      <div className='w-full overflow-x-auto h-[400px] text-center relative duration-500 bg-gray-100 flex items-center'>
        {Arrayss.map((item, index) => (
          <div className={`w-full flex-shrink-0 h-full overflow-hidden overflow-x-auto ${currentIndex === index ? 'relative  opacity-100 z-50' : 'absolute  opacity-0 z-0'}`} key={index}>
            <img
              src={item.img}
              className={`w-full h-full duration-1000 object-cover ${currentIndex === index ? `-translate-x-[${currentIndex * 100}%] opacity-100 z-50` : 'opacity-50 z-0'}`}
              alt=''
            />
            <div className='p-2 rounded-full flex gap-2 duration-500 bg-gray-300  absolute z-[100] left-1/2  bottom-4'>
              {Arrayss.map((item,index)=>{
                return(
                  <div className={`w-2 h-2 bg-gray-100 duration-500 shadow-custom rounded-full ${currentIndex === index ? 'w-6' : ''}`}></div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Swiper;
