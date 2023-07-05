import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

const SectionComponent = ({ introductionText, overviewText, transitionDelay, transitionDuration }) => {
  return (
    <motion.div
      className="section"
      variants={fadeIn("down", "spring", transitionDelay, transitionDuration)}
    >
      <p className={styles.sectionSubText}>{introductionText}</p>
      <h2 className={styles.sectionHeadText}>{overviewText}</h2>
    </motion.div>
  );
};

export default SectionComponent;
