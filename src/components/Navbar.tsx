"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const pathname = usePathname();
  const [query,setquery] = useState('');
  
  console.log(pathname );


  const navbarList= [ 
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Studio",
      link: "/studio",
    },
  ];

  return (
   <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-400'>
     <nav className="bg- p-4 flex items-center justify-between">
    {/* Logo */}
   <div className="flex items-center">
      <Link href="/" className=" text-black text-lg font-semibold">
           <h1 className='w-20'>LOGONs</h1>
      </Link>
     
    </div>


  {/* Search */}
  <div className="relative w-full hidden lg:inline-flex lg:w-[600px] 
  h-10 text-base border-[1px] border-black
  items-center gap-2 justify-between px-6 rounded-md">
      <input
        type="text"
        placeholder="Search your products here"
        className="flex-1 h-full outline-none bg-transparent "
        onChange={(e)=>setquery(e.target.value)}
        value={query}
      />
      {query ? (<IoCloseOutline onClick={()=>setquery("")}
       className='w-5 h-5 hover:cursor-pointer'/>):(
      <FaSearch  className='w-5 h-5 hover:cursor-pointer'/>)}
    </div>


    {/* Options */}
    <div className="hidden md:inline-flex items-centre gap-2 ">
      {navbarList.map((item)=>(
        <Link href={item?.link} key={item?.link} className={`flex 
        hover:font-medium w-20 h-6 justify-center items-center 
         text-gray-600 hover:underline-offset-4 decoration-[1px] hover:text-gray-950 
         md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0 ${pathname === item?.link  && 'text-gray-950 underline'}
         `}>
          {item?.title}
        </Link>
      ))}
    </div>
    <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer w-8 h-6'/>

  </nav>
  </div>
  )
}

export default Navbar

