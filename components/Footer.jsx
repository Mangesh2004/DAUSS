'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    id="footer"
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-center flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          {/* Your content here */}
        </h4>
        {/* <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <span className="font-normal text-[30px] text-white">Join DAUSS</span>
        </button> */}
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            {/* Your content here */}
          </h4>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[30px] h-[30px] object-contain"
                />
                {social.name === 'email' && (
                  <span className="font-semibold text-[14px] text-xl text-white opacity-50 ml-2">
                    {/* Your content here */}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
