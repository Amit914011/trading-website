import React, { useState, useEffect } from 'react';
import logo from '../assets/farhaan meer logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navBackground ? 'bg-white shadow-lg' : 'bg-transparent '
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to='/'><img src={logo} className="h-10" alt="Logo" /></Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 p-2">
          <Link to="/" className=" text-xl hover:text-[#231892]">Home</Link>
          <Link to="/aboutus" className=" text-xl hover:text-[#231892]">About Us</Link>

          {/* Services & Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className=" text-xl focus:outline-none hover:text-[#231892]">
              Services & Products
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 bg-white text-black rounded shadow-lg w-[200px] shadow-gray-400">
                <Link to="/empowringins" className="block px-4 py-2 hover:text-[#231892]">Empowering Investors</Link>
                <Link to="/mutualfund" className="block px-4 py-2 hover:text-[#231892] ">Mutual Fund</Link>
                <Link to="/healthins" className="block px-4 py-2 hover:text-[#231892]">Health Insurance</Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesDropdownOpen(true)}
            onMouseLeave={() => setIsResourcesDropdownOpen(false)}
          >
            <button className=" text-xl focus:outline-none hover:text-[#231892]">
              Resources
            </button>
            {isResourcesDropdownOpen && (
              <div className="absolute left-0 w-[200px] bg-white rounded shadow-lg shadow-gray-400">
                <Link to="/sipcalculator" className="block px-4 py-2 hover:text-[#231892]">SIP Calculator</Link>
                <Link to="/lumpsumcalculator" className="block px-4 py-2 hover:text-[#231892]">Lumpsum Calculator</Link>
                <Link to="/swpcalculator" className="block px-4 py-2 hover:text-[#231892]">SWP Calculator</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className=" text-xl">Blogs</Link>
          <Link to="/contactus" className=" text-xl">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link to="/home" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About Us</Link>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services & Products</a>
          <Link to="/sipcalculator" className="block px-4 py-2 hover:bg-gray-700">SIP Calculator</Link>
          <Link to="/lumpsumcalculator" className="block px-4 py-2 hover:bg-gray-700">Lumpsum Calculator</Link>
          <Link to="/swpcalculator" className="block px-4 py-2 hover:bg-gray-700">SWP Calculator</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-gray-700">Blogs</Link>
          <Link to="/inquiryform" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
