import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import SectionComponent from './SectionComponent';

const ServiceCard = ({ index, title, icon, skills, transitionDelay, transitionGap, transitionDuration }) => {
  const base = {
    scale: 1,
    translateY: 0,
  }
  const cardAnimation = {
    initial: base,
    hover: {
      scale: 1.05,
      translateY: -15,
      boxShadow: "5px 15px 20px rgba(0, 0, 0, 0.5)"
    }
  };

  const shadowlessContentAnimation = {
    initial: base,
    hover: {
      scale: 1.05,
      translateY: -15,
    }
  };

  const headerAnimation = {
    initial: {
      scale: 1,
      translateY: 20,
    },
    hover: {
      scale: 0.9,
      translateY: -5,
    }
  };

  const skillsAnimation = {
    initial: {
      scale: 1,
      translateY: 125,
    },
    hover: {
      scale: 1,
      translateY: 0,
    }
  };
  
  return (
    <motion.div 
      className="flex justify-center" // Center the card container
      variants={fadeIn("right", "spring", transitionDelay + (index * transitionGap), transitionDuration)}
    >
      <div className='w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[22rem]'> {/* Adjusted for responsiveness */}
        <div className='w-full h-full orange-teal-gradient p-[2px] rounded-[20px] shadow-card'>
          <motion.div
            className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col overflow-hidden h-full' // Ensure the height fills the container
            whileHover='hover'
            initial='initial'
            variants={cardAnimation}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
              variants={shadowlessContentAnimation}
            />
            <motion.h3
              className='text-white text-[20px] font-bold text-center select-none'
              variants={headerAnimation}
            >
              {title}
            </motion.h3>
            <motion.div className='flex flex-row gap-2' variants={skillsAnimation}>
              {skills.map((skill) => (
                <p
                  key={`${name}-${skill.name}`}
                  className={`text-[16px] font-semibold select-none ${skill.color}`}
                >
                  #{skill.name}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );  
};

const Skills = () => {
  return (
    <>
      <SectionComponent
        introductionText="What I do"
        overviewText="Skills."
        transitionDelay={0.25}
        transitionDuration={0.5}
      />

      <div className='mt-5 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} transitionDelay={1} transitionGap={0.25} transitionDuration={0.5} {...service}/>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")