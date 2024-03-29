import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { experiences, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const cardAnimation = {
    hover: {
      scale: 1.05,
      rotateX: -10,
      translateY: -10,
      boxShadow: "5px 15px 20px rgba(0, 0, 0, 0.5)"
    }
  };

  const contentAnimation = {
    hover: {
      scale: 1.05,
      rotateX: -15,
      translateY: -15,
      boxShadow: "5px 15px 20px rgba(0, 0, 0, 1)"
    }
  };

  const shadowlessContentAnimation = {
    hover: {
      scale: 1.05,
      rotateX: -15,
      translateY: -15,
    }
  };

  const overlayAnimation = {
    hover: {
      scale: 1.15,
      rotateX: -20,
      translateY: -25,
      boxShadow: "5px 20px 10px rgba(0, 0, 0, 0.5)"
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="p-[3px] green-pink-gradient rounded-2xl">
        <motion.div
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
          variants={cardAnimation}
          transition={{duration: 0.3}}
          whileHover='hover'
        >
          <div className='relative w-full h-[230px]'>
            <motion.img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
              variants={contentAnimation}
            />

            {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                variants={overlayAnimation}
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </motion.div>
            </div> */}
          </div>

          <motion.div className='mt-5' variants={shadowlessContentAnimation}>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </motion.div>

          <motion.div className='mt-4 flex flex-wrap gap-2' variants={shadowlessContentAnimation}>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");