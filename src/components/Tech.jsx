import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import SectionComponent from "./SectionComponent";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';


const Tech = () => {
  return (
    <>
      <SectionComponent
        introductionText="What I've worked with"
        overviewText="Technologies."
        transitionDelay={0.25}
        transitionDuration={0.5}
      />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div key={technology.name} variants={fadeIn("up", "spring", 0.5 + (index * 0.125), 0.5)}>
            <div className='w-28 h-28'>
                <BallCanvas icon={technology.icon}/>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")