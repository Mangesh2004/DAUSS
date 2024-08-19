'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      id='about'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title=" About DAUSS"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-justify text-secondary-white"
      >
        <span className="font-bold"> <br />The Defense Aerial Unmanned Surveillance Sentinel is a student driven initiative at Pune Vidyarthi Griha’s  College of Engineering and Technology, Pune.  We are dedicated to explore the rapidly evolving field of unmanned aerial systems (UAS) with a focus on applications in defense and surveillance.  We strive to equip members with the knowledge and skills necessary to ideate, design, develop, deploy and operate Unmanned Aerial Vehicles (UAVs) for different  purposes. We aim to foster innovation in aerial technology while promoting an understanding of ethical and strategic implications of UAVs in modern day scenarios. <br /><br /> Through hands-on projects, workshops, and collaborations with industry experts, we strive to create a dynamic learning environment where students engage with cutting-edge technologies.

        Join us as we push the boundaries of what's possible in aerial technology. Whether you're interested in UAV Aeronautics engineering, surveillance systems, or the broader aspects of civil and defense technology, DAUSS offers a platform to explore these areas and contribute to meaningful advancements in the field.  
<br /><br /> May your flight always conquer uncharted territories.</span>
      </motion.p>

      
    </motion.div>
  </section>
);

export default About;
