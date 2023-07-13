import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { motion } from 'framer-motion';
import '../index.css'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          to='/'
          className='flex items-center gap-4'
          onClick={() => {
            setActive("");
            window.scrollTo(50, 50);
          }}
        >
          <img src={logo} alt='logo' className='object-contain w-20 mt-2' />
         
        </Link>

        {/* <ul className='flex-row hidden gap-10 list-none sm:flex '> */}
        <ul className="secTopNavi" id="navLink">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-secondary" : "text-black"
              } hover:text-black text-[18px] font-medium cursor-pointer `}
             
              onClick={() => setActive(nav.title)}
            > 
            
            <motion.button 
            whileHover={{
              scale: 1.1,
              
            }}>
            
              <a href={`#${nav.id}`}>{nav.title}</a>
              </motion.button>
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-end flex-1 sm:hidden '>
        {/* <div className='bg-black filter-invert(1)'> */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain bg-black invert'
            onClick={() => setToggle(!toggle)}
          />
        {/* </div> */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='flex flex-col items-start justify-end flex-1 gap-4 list-none'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-secondary"
                  }`}
                  
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
