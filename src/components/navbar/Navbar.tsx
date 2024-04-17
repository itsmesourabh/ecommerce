import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-2" /> */}
      <span className="text-white text-lg font-semibold"> Ecommerce Brand</span>
    </div>


  {/* Search */}
  <div className="flex-grow flex justify-center">
      <input
        type="text"
        placeholder="Search your products here"
        className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600 w-full sm:max-w-md lg:max-w-lg"
      />
    </div>


    {/* Options */}
    <div className="flex items-center space-x-8">
     
        <Link href="/home" className="text-white hover:text-gray-300 hover:underline">Home</Link>
        <Link href="/shop" className="text-white hover:text-gray-300 hover:underline">Shop</Link>
        <Link href="/cart" className="text-white hover:text-gray-300 hover:underline">Cart</Link>
        <Link href="/profile" className="text-white hover:text-gray-300 hover:underline">Profile</Link>
        <Link href="/studio" className="text-white hover:text-gray-300 hover:underline">Studio</Link>
      
    </div>

  
  </nav>
  )
}

export default Navbar

