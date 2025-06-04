import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#1E1E1E] text-white">
        <div className="container max-w-full mx-auto">
          <div className="flex justify-between items-center py-4 px-4">
            <h1>SPORTS</h1>
            <nav className="flex list-none gap-4">
              <li className="relative">
                <a href="#">
                Products
                </a>
                <span className="absolute bottom-[-2px] left-0 w-1/2 h-1 border-yellow-500 border-b-2"></span>
              </li>
              <li><a href="#">
                Track Order
                </a></li>
              <li><a href="#">
                Contact
                </a></li>
              <li><a href="#">
                About Us
                </a></li>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header
