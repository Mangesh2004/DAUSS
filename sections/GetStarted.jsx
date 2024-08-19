'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const images = ['model1.JPG', 'model2.JPG', 'model3.JPG']; // Replace with your image paths

const GetStarted = () => {
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
      id='explore'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        {/* Image Carousel Section */}
        <motion.div
          className="relative flex w-full h-[550px] overflow-hidden flex-1"
        >
          <div className="relative flex w-full h-full">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`image-${index}`}
                className="absolute w-full h-full rounded-3xl object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImage ? 1 : 0 }}
                transition={{ duration: 1 }} // Adjust duration for fade transition
              />
            ))}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| AIRCRAFTS " />
          <TitleText title={<> Explore our recent models </>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((features, index) => (
              <StartSteps
                key={features}
                number={index + 1}
                text={features}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
