'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const images = ['member1.jpg', 'member2.jpg', 'member3.jpg']; // Add your images here

const World = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Meet our members" textStyles="text-center" />
        <motion.div
          className="relative mt-[69px] flex w-full h-[550px] overflow-hidden"
        >
          <div className="relative flex w-full h-full">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`image-${index}`}
                className="absolute w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImage ? 1 : 0 }}
                transition={{ duration: 1 }} // Adjust duration for fade transition
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
