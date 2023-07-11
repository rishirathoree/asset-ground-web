import React, { useState } from 'react'

const Howitworks = () => {
    const switches = ['Selling Assets','Buying Assets']
    const [currentActiveSwitch,setCurrentActiveSwitches] = useState()
    const [currentAccordionActive,setCurrentAccordionActive] = useState(2)
    const faq = [
        {
          question: 'What is AssetGround?',
          answer: 'AssetGround  is a platform for selling and buying various types of digital assets, such as photos, illustrations, videos, and more.'
        },
        {
          question: 'How can I sell my assets on AssetGround?',
          answer: 'To sell your assets on AssetGround, you need to create an account, upload your assets, set the pricing and licensing terms, and publish them on the platform for potential buyers to discover and purchase.'
        },
        {
          question: 'What types of assets can I sell on AssetGround?',
          answer: 'You can sell a wide range of digital assets on AssetGround, including but not limited to photos, illustrations, videos, audio files, 3D models, templates, and design assets.'
        },
        {
          question: 'Can I manage multiple YouTube channel names on AssetGround?',
          answer: 'Yes, you can manage multiple YouTube channel names on AssetGround. You can specify the YouTube channel name for each asset you upload, allowing you to manage and track the performance of different channels.'
        },
        {
          question: 'How can I update my YouTube channel name for an asset?',
          answer: 'To update the YouTube channel name for an asset, go to your AssetGround account settings, navigate to the asset you want to modify, and edit the YouTube channel name associated with it.'
        },
        {
          question: 'How do I receive payments for my sales on AssetGround?',
          answer: 'AssetGround provides different payment methods for receiving your earnings, such as PayPal, bank transfers, or other supported payment gateways. You can set up your preferred payment method in your account settings.'
        }
      ];
      const handleAccordionClick = (index) => {
        if (currentAccordionActive === index) {
          setCurrentAccordionActive(null); // Close the accordion
        } else {
          setCurrentAccordionActive(index); // Open the accordion
        }
      };
  return (
    <>
        <div className='flex items-center justify-center flex-col px-8 lg:py-32 md:py-32 sm:py-20 lg:w-full md:w-full sm:w-full rounded-lg space-y-8'>
            <div className='lg:w-4/5 md:w-4/5 sm:w-full flex-col space-y-6 flex items-start'>
            <ul className="flex flex-wrap items-center">
            {switches.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setCurrentActiveSwitches(item);
                  }}
                  className={`block lg:px-6 md:px-6 sm:px-4 py-4 cursor-pointer text-sm font-semibold ${
                    currentActiveSwitch === item
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

          <div className='flex flex-col gap-4 w-full '>
          {faq.map((item,index)=>{
            return(
            <div onClick={()=>{handleAccordionClick(index)}} className='w-full flex flex-col gap-4 bg-[#0E4B720A] p-4'>
            <div  className='w-full flex items-center justify-between'>
                <p className='font-semibold text-sm text-[#0E4B72]'>{item.question}</p>
                <i  className={`bx ${currentAccordionActive == index ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </div>
            <p className={`font-light  text-[14px] text-[#666666] ${currentAccordionActive == index ? 'visible duration-1000 opacity-100 h-20' : 'invisible opacity-0 h-0 duration-1000'}`}>{item.answer}</p>
          </div>
            )
          })}
          </div>
            </div>
        </div>
    </>
  )
}

export default Howitworks