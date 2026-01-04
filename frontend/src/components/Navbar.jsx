import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  console.log('Navbar component rendered')
  const  [visible , setVisible] = React.useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="" />
      <ul className='hidden sm:flex flex-col items-center gap-1'>
        <NavLink to ='/' className='px-4 py-2 hover:text-gray-500'>Home</NavLink>
        <NavLink to ='/collection' className='px-4 py-2 hover:text-gray-500'>Collection</NavLink>
        <NavLink to ='/about' className='px-4 py-2 hover:text-gray-500'>About</NavLink>
        <NavLink to ='/contact' className='px-4 py-2 hover:text-gray-500'>Contact</NavLink>
      </ul>
      
<div className='flex items-center gap-6'>
    <img src={assets.search_icon} className='w-4 h-4 cursor-pointer' alt="Search" />
</div>
    <div className='group relative'>
      <img className='w-5' src={assets.profile_icon} alt="" />
  <p className='group-hover:block hidden absolute top-8 right-0 bg-gray-100 rounded-lg p-2'>Profile</p>
  <p className='group-hover:block hidden absolute top-12 right-0 bg-gray-100 rounded-lg p-2'>Settings</p>
<p className='group-hover:block hidden absolute top-16 right-0 bg-gray-100 rounded-lg p-2'>Logout</p>
    </div>
    <link href='/cart' className='relative'></link> 
    </div>
  )
}

export default Navbar
