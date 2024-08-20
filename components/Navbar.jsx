'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex items-center justify-between`}>
        <div className="feedback-gradient" />
        {/* Text Section */}
        <div className="flex flex-col">
          <h1 className="font-extrabold text-[30px] text-white leading-[30px] md:text-4xl">
            PVG COET & GKPIOM, Pune-09
          </h1>
          <h2 className="text-white text-lg md:text-xl">
            Department of Electronics & Telecommunication
          </h2>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          ☰
        </button>

        {/* Navigation links */}
        <div className={`md:flex md:items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ScrollLink
            to="explore"
            smooth
            duration={500}
            className="relative inline-block px-4 py-2 text-white rounded group cursor-pointer"
          >
            Explore
            <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-[2px]" />
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            className="relative inline-block px-4 py-2 text-white rounded group cursor-pointer"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-[2px]" />
          </ScrollLink>
          <ScrollLink
            to="footer"
            smooth
            duration={500}
            className="relative inline-block px-4 py-2 text-white rounded group cursor-pointer"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-[2px]" />
          </ScrollLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
