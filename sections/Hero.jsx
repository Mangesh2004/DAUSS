'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant ,imageVariant} from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} `}>
    
    <motion.div
    variants={imageVariant(1.2)}
    initial="hidden"
    animate="show"
    className="relative w-full flex items-center justify-center"
  >
    <img
      src="/logo.png"
      alt="cover"
      className="w-[80%] h-auto object-cover  relative"
    />
  </motion.div>
  </section>
);

export default Hero;
