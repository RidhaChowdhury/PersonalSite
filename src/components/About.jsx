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
    rotateX: 0,
    translateY: 0,
  }
  const cardAnimation = {
    initial: base,
    hover: {
      scale: 1.05,
      rotateX: -10,
      translateY: -15,
      boxShadow: "5px 15px 20px rgba(0, 0, 0, 0.5)"
    }
  };

  const contentAnimation = {
    initial: base,
    hover: {
      scale: 1.1,
      rotateX: -15,
      translateY: -20,
      boxShadow: "5px 15px 20px rgba(0, 0, 0, 1)"
    }
  };

  const shadowlessContentAnimation = {
    initial: base,
    hover: {
      scale: 1.05,
      rotateX: -15,
      translateY: -15,
    }
  };

  const headerAnimation = {
    initial: {
      scale: 1,
      rotateX: 0,
      translateY: 20,
    },
    hover: {
      scale: 0.9,
      translateY: -10,
    }
  };

  const skillsAnimation = {
    initial: {
      scale: 1,
      rotateX: 0,
      translateY: 75,
    },
    hover: {
      scale: 1,
      translateY: 0,
    }
  };

  const overlayAnimation = {
    initial: base,
    hover: {
      scale: 1.15,
      rotateX: -20,
      translateY: -25,
      boxShadow: "5px 20px 10px rgba(0, 0, 0, 0.5)"
    }
  };
  
  return (
    <motion.div variants={fadeIn("right", "spring", transitionDelay + (index * transitionGap), transitionDuration)}>
      <div className='xs:w-[250px] w-full'>
        <div className='w-full orange-teal-gradient p-[2px] rounded-[20px] shadow-card'>
            <motion.div
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col overflow-hidden'
              whileHover='hover'
              initial='initial'
              variants={cardAnimation}
              transition={{duration: 0.3}}
            >
              <motion.img
                src={icon}
                alt={title}
                className='w-16 h-16 object-contain'
                variants={shadowlessContentAnimation}
              />
              <motion.h3
                className='text-white text-[20px] font-bold text-center'
                variants={headerAnimation}
              >
                {title}
              </motion.h3>
              <motion.div className='flex flex-row gap-2' variants={skillsAnimation}>
                {skills.map((skill) => (
                  <p
                    key={`${name}-${skill.name}`}
                    className={`text-[16px] font-semibold ${skill.color}`}
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
        I'm a versatile full-stack developer with a strong background in the MERN stack, along with proficiency in ASP.NET. With a keen eye for aesthetics and a focus on functionality and scalability, I strive to create stunning and robust websites and applications. Drawing from my experience in game development and teaching, I bring a unique blend of creativity and pedagogical skills to my work. Whether it's crafting immersive user experiences or imparting knowledge to those around me, I'm dedicated to delivering exceptional results.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")