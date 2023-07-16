import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import SectionComponent from './SectionComponent';

import { Canvas, useLoader } from '@react-three/fiber'
const About = () => {
  return (
    <>
      <SectionComponent
        introductionText="Introduction"
        overviewText="Overview."
        transitionDelay={0.25}
        transitionDuration={0.5}
      />
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a versatile full-stack developer experienced in the MERN stack and ASP.NET. With proficiency in AI technologies like Langchain and text embeddings, I bring complexity and sophistication to my work. Combining aesthetics, functionality, and scalability allows me to create robust and powerful applications. My backgrounds in game development, teaching, and content creation adds creativity, pedagogical, and communicative skills to my work. Crafting immersive user experiences and optimizing systems with AI. I deliver exceptional results that inspire innovation.
      </motion.p>
    </>
  );
}

export default SectionWrapper(About, "about");
