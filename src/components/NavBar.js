import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>三秒 Music Page</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='p-4'><Link to="Theory" smooth={true} offset={-200} duration={500}>Theory</Link></li>
        <li className='p-4'><Link to="terms" smooth={true} offset={-50} duration={500}>Terms</Link></li>
        <li className='p-4'><Link to="tools" smooth={true} offset={-100} duration={500}>Tools</Link></li>
        <li className='p-4'><Link to="practice" smooth={true} offset={-50} duration={500}>practice</Link></li>
        <li className='p-4'><Link to="contact" smooth={true} offset={-50} duration={500}>contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>三秒 Music Page</h1>
          <li className='p-4 border-b border-gray-600'><Link to="Home" smooth={true} duration={500}>Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="Music Theory" smooth={true} offset={-200} duration={500}>Music Theory</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="Terms" smooth={true} offset={-50} duration={500}>Terms</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="Tools" smooth={true} offset={-50} duration={500}>Tools</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="practice" smooth={true} offset={-50} duration={500}>practice</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="contact" smooth={true} offset={-50} duration={500}>contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;