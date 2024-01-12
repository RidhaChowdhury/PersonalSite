import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { fadeIn } from '../utils/motion';
import SectionComponent from './SectionComponent';
import Timeline from './Timeline';


const Experience = () => {
  return (
    <>
      <SectionComponent
        introductionText="What I've done so far"
        overviewText="Work Experience."
        transitionDelay={0.25}
        transitionDuration={0.125}
      />
    </>
  )
}

export default SectionWrapper(Experience, "work")