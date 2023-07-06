import React from 'react'
import productImage1 from '../assets/Rectangle1.png'
import productImage2 from '../assets/Rectangle2.png'
import productImage3 from '../assets/Rectangle 46.png'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <>
    <div className='lg:px-20 md:px-12 space-y-8 sm:px-4 pt-12 pb-40'>

    <div className='flex items-center justify-between'>
    <p className='font-extrabold text-lg'>Lorem ipsum dolor sit amet consectetur</p>
    <div className='flex gap-2 items-center'>
        <i className='bx p-1 ring-1 ring-black/5 text-slate-200 bx-heart'></i>
        <i className='bx p-1 ring-1 ring-black/5 text-slate-200 bx-share-alt'></i>
    </div>
    </div>

    <div className='flex items-center justify-between'>
    <div className='flex items-center gap-4'>
        <span className='font-light text-gray-600 text-sm'>#12345</span>
        <div className='flex items-center gap-2'><i className='bx bx-laptop text-orange-200'></i><span className='font-medium text-gray-400 text-sm'>Website</span></div>
        <p className='text-[12px] font-medium  text-purple-500 bg-purple-500/10 px-2 py-1 rounded-full'>High Interest</p>
    </div>
    <span className='font-light text-gray-600 text-xsm'>5 Days Ago</span>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
    <button className="px-4 absolute lg: md:bottom-6 sm:bottom-4 z-50 rounded-md flex items-center right-8 py-2 gap-2 text-sm font-medium shadow-lg bg-[#0E4B72] text-white"><i className='bx bx-images'></i> See all collection</button>
  <div className="row-span-2">
    <img src={productImage1} alt="Image 1" className="w-full h-full object-cover" />
  </div>
  <div>
    <img src={productImage2} alt="Image 2" className="w-full h-full object-cover" />
  </div>
  <div>
    <img src={productImage3} alt="Image 3" className="w-full h-full object-cover" />
  </div>
</div>

<div className='flex flex-col justify-between items-start lg:w-1/2 md:w-1/2 sm:w-full'>
<div className='space-y-4 '>
  {/* about business */}
  <p className='font-extrabold text-lg'>About Business</p>

  <div className='flex items-center justify-between'>
  <div><p className='font-light text-xsm'>Field</p><p className='font-semibold text-sm'>eCommerce</p></div>
  <div>
  <p className='font-light text-xsm'>Starting Date</p><p className='font-semibold text-sm'>05 may 2020</p>
  </div>
    <div>
  <p className='font-light text-xsm'>Working Hours/Week</p><p className='font-semibold text-sm'>20</p>
    </div>
</div>

<div className=''>
{/* description */}
<p className='font-medium text-sm text-gray-500'>Description</p>
<p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel possimus hic, esse, magni molestias mollitia eos delectus voluptatem assumenda saepe commodi rem nostrum sapiente numquam repellendus nulla odit. Commodi laborum fuga facilis minima architecto dicta iste! Laboriosam, cumque aspernatur! Facere, necessitatibus? Sapiente tenetur ipsa voluptates commodi quaerat autem? Nisi?</p>
</div>

<div >
{/* description */}
<p className='font-medium text-sm text-gray-500'>Asset Included</p>
<p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel possimus hic, esse, magni molestias mollitia eos delectus voluptatem assumenda saepe commodi rem nostrum sapiente numquam repellendus nulla odit. Commodi laborum fuga facilis minima architecto dicta iste! Laboriosam, cumque aspernatur! Facere, necessitatibus? Sapiente tenetur ipsa voluptates commodi quaerat autem? Nisi?</p>
</div>

<div className='py-12 border-y'>
{/* description */}
<p className='font-medium text-lg'>Audience</p>
<div className='mt-6 space-y-4'>
  <div className='grid grid-cols-3'>
  <div><p className='font-light text-xsm'>Countries of the majority of users? </p><p className='font-semibold text-sm'>UAE, KSA</p></div>
  <div><p className='font-light text-xsm'>Website Languages</p><p className='font-semibold text-sm'>English</p></div>
<div><p className='font-light text-xsm'>Analytics Tools Available</p><p className='font-semibold text-sm'>Yes</p></div>
  </div>

  <div className='grid grid-cols-3'>
  <div><p className='font-light text-xsm'>Avg. Monthly Page views</p><p className='font-semibold text-sm'>10,000</p></div>
  <div><p className='font-light text-xsm'>Avg. Monthly Users</p><p className='font-semibold text-sm'>500</p></div>
<div><p className='font-light text-xsm'>Analytics Tools Available</p><p className='font-semibold text-sm'>Yes</p></div>
  </div>
</div>
</div>

<div className='space-y-8'>
{/* description */}
<p className='font-medium text-lg'>Profitability</p>
<div className='mt-6 space-y-4'>
  <div className='grid grid-cols-3'>
  <div><p className='font-light text-xsm'>Monetization Type</p><p className='font-semibold text-sm'>Amazon FBM</p></div>
  <div><p className='font-light text-xsm'>Employees Available</p><p className='font-semibold text-sm'>2</p></div>
  </div>
</div>
<div>
{/* description */}
<p className='font-medium text-sm text-gray-500'>Inventory Status and Details</p>
<p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel possimus hic, esse, magni molestias mollitia eos delectus voluptatem assumenda saepe commodi rem nostrum sapiente numquam repellendus nulla odit. Commodi laborum fuga facilis minima architecto dicta iste! Laboriosam, cumque aspernatur! Facere, necessitatibus? Sapiente tenetur ipsa voluptates commodi quaerat autem? Nisi?</p>
</div>

<div>
{/* description */}
<p className='font-medium text-sm text-gray-500'>Suppliers Status and Details</p>
<p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel possimus hic, esse, magni molestias mollitia eos delectus voluptatem assumenda saepe commodi rem nostrum sapiente numquam repellendus nulla odit. Commodi laborum fuga facilis minima architecto dicta iste! Laboriosam, cumque aspernatur! Facere, necessitatibus? Sapiente tenetur ipsa voluptates commodi quaerat autem? Nisi?</p>
</div>

<div className='mt-6 space-y-4'>
  <div className='grid grid-cols-3'>
  <div><p className='font-light text-xsm'>Revenue for last 30 days</p><p className='font-semibold text-sm'>10,000 USD</p></div>
  <div><p className='font-light text-xsm'>Revenue for last 6 month</p><p className='font-semibold text-sm'>6000 USD</p></div>
  <div><p className='font-light text-xsm'>Revenue for last 12 month</p><p className='font-semibold text-sm'>6000 USD</p></div>
  </div>

  <div className='grid grid-cols-3'>
  <div><p className='font-light text-xsm'>Net profit last 3 month</p><p className='font-semibold text-sm'>10,000 USD</p></div>
  <div><p className='font-light text-xsm'>Net profit last 6 month</p><p className='font-semibold text-sm'>6000 USD</p></div>
  <div><p className='font-light text-xsm'>Net profit last 12 month</p><p className='font-semibold text-sm'>6000 USD</p></div>
  </div>

  <div className='grid grid-cols-3'>
  <div><p className='font-light text-xsm'>Asking Price</p><p className='font-semibold text-sm'>10,000 USD</p></div>
  <div><p className='font-light text-xsm'>Multiple</p><p className='font-semibold text-sm'>6.5</p></div>
  </div>
</div>
</div>

<div className='pt-8 '>
  <Link to="/interested"><button className='font-medium text-white text-sm p-4 rounded bg-[#0E4B72]'>I'm Interested</button></Link>
  <span className='font-medium text-sm p-4 rounded text-[#0E4B72]'>Need More Info?</span>
</div>

    </div>
    </div>
    </div>
    </>
  )
}

export default ProductPage