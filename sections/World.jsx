'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const images = ['abhishek.png', 'aditya.png', 'ankit.png','mangesh.png','harsh.png','neerad.png','sachi.png','srushti.png','vaishnavi.png','vedang.png']; // Add your images here

const World = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 5 seconds

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
          className="relative mt-[69px] flex w-full h-[750px] overflow-hidden rounded-[40px]" // Apply rounded corners to the container
        >
          <div className="relative flex w-full h-full rounded-[40px] overflow-hidden"> {/* Ensure the container has rounded corners */}
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`image-${index}`}
                className="absolute w-full h-full object-cover rounded-[40px]" // Apply rounded corners to the image
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
