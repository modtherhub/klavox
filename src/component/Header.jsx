import React from 'react'
import { motion } from 'framer-motion';
import { FiGithub, FiMenu, FiX} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useState } from 'react';

const Header = () => {
  // Toggle the menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='absolute w-full z-50 transition-all 
    duration-300'>

      <div className='container mx-auto px-4 sm:px-6 
       lg:px-8 flex items-center justify-between h-16 md:h-20'>
        
        {/* logo/Name */}
        <motion.div
        initial = {{opacity: 0, x: -150}}
        animate = {{opacity: 1, x: 0}}
        transition = {{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className='flex items-center'>
          <div className='h-10 w-10 rounded-xl 
          bg-gradient-to-r from-gray-500 to-gray-100 
          flex items-center justify-center text-purple-600
          font-bold text-xl mr-3'>
          M
          </div>

          <span className='text-xl font-bold bg-gradient-to-r
          from-gray-400 to-gray-100 bg-clip-text
          text-transparent'>
          MiladiCode
          </span>

        </motion.div>

        {/* Desktop Navigation*/}
        <nav className='lg:flex hidden space-x-8'>
          {["Home", "About", "Project", "Experience", "Contact"].map((item, index) =>(
            <motion.a
            initial = {{opacity: 0, y: -20}}
            animate = {{opacity: 1, y: 0}}
            transition = {{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2
            }}
            key={item}
            className='relative text-gray-800 
            dark:text-gray-200 hover:violet-600
            dark:hover:text-violet-400 font-medium
            transition-colors duration-300 group'
            href='#'>
              {item}
              <span className='absolute bottom-0 left-0 
              w-0 h-0.5 group-hover:w-full 
              bg-violet-600 transition-all 
              duration-300'></span>
            </motion.a>
          ))}
        </nav>


        <div className='md:flex hidden items-center 
        space-x-4'>

          <motion.a 
          initial = {{opacity : 0, scale : 0.5}}
          animate = {{opacity : 1, scale : 1}}
          transition={{delay : 1.3, duration : 0.8}}
          className='text-white dark:text-gray-300
          hover:text-violet-600 dark:hover:text-violet-400
          transition-colors duration-300' 
          href="#">
            <FiGithub className='w-5 h-5'/>
          </motion.a>

          <motion.a 
          initial = {{opacity : 0, scale : 0.5}}
          animate = {{opacity : 1, scale : 1}}
          transition={{delay : 1.3, duration : 0.8}}
          className='text-white dark:text-gray-300
          hover:text-violet-600 dark:hover:text-violet-400
          transition-colors duration-300' 
          href="#">
            <FaLinkedin className='w-5 h-5'/>
          </motion.a>

          <motion.a 
          initial = {{opacity : 0, scale : 0.5}}
          animate = {{opacity : 1, scale : 1}}
          transition={{delay : 1.3, duration : 0.8}}
          className='text-white dark:text-gray-300
          hover:text-violet-600 dark:hover:text-violet-400
          transition-colors duration-300' 
          href="#">
            <FaYoutube className='w-5 h-5'/>
          </motion.a>

        </div>

        <motion.button 
        initial = {{ opacity : 0, scale : 0.8 }}
        animate = {{ opacity : 1, scale : 1 }}
        transition={{
          delay: 1.6, 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className='ml-4 px-4 py-2 rounded-xl
        bg-gradient-to-r from-gray-400 to-gray-100
        text-violet-700 font-bold hover:from-gray-700
        hover:to-purple-700 hover:text-white transition-all duration-500'>
          Hire Me
        </motion.button>

        {/* Mobile Menu button*/}
        <div className='md:hidden flex items-center'>
          <motion.button 
          whileTap={{scale: 0.7}}
          onClick={toggleMenu}
          className='text-gray-300'>
            {  isOpen ? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/>}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu*/}
      <div
      className='md:hidden overflow-hidden bg-white 
      dark:'>
        
      </div>
    </header>
  )
}

export default Header;
