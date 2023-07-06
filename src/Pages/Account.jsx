import React, { useState } from 'react'
import PersonalInformation from '../Components/PersonalInformation'
import AccountSecurity from '../Components/AccountSecurity'
import MyFavourites from '../Components/MyFavourites'
import InterestedAsset from '../Components/InterestedAsset'
import AccountAsset from '../Components/AccountAsset'

const Account = () => {
    const [currentSidebarMenuActive,setCurrentSidebarMenuActive] = useState(0)
    const sidebarTabs = [
        {name:'Personal Info',icon:'bx bx-user'},
        {name:'Security',icon:'bx bx-lock'},
        {name:'My Favourite',icon:'bx bx-heart'},
        {name:'Interested Assets',icon:'bx bx-brain'},
        {name:'My Asset',icon:'bx bx-package'},
        {name:'Logout',icon:'bx bx-log-out'},
    ]
  return (
    <div className='px-20 py-12 w-full justify-center flex items-center'>
        <div className='flex gap-4 w-full'>
            <div className='bg-white h-min space-y-4 shadow-lg rounded-md shadow-black/5 py-4 lg:col-start-1 w-max lg:col-end-1'>
                {sidebarTabs.map((item,index)=>{
                    return(
                        <div onClick={()=>{setCurrentSidebarMenuActive(index)}} className={`p-2 flex items-center gap-4 duration-100 pl-4 pr-20   ${currentSidebarMenuActive == index ? 'border-l-[4px] border-red-500 opacity-100' : ' opacity-50'}`}>
                            <i className={`${item.icon}`}></i>
                            <p className='font-medium text-black text-xsm select-none' contentEditable='false'>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className='w-1/2 '>
            {currentSidebarMenuActive === 0 && <PersonalInformation/>}
            {currentSidebarMenuActive === 1 && <AccountSecurity/>}
            {currentSidebarMenuActive === 2 && <MyFavourites/>}
            {currentSidebarMenuActive === 3 && <InterestedAsset/>}
            {currentSidebarMenuActive === 4 && <AccountAsset/>}
            </div>
        </div>
    </div>
  )
}

export default Account