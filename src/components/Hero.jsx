import React, { Suspense, useEffect, useState, useContext, createContext } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import HeroShapes from "./canvas/Shapes";
import { github_mark, linkedin, resume, resume_icon } from "../assets";

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
  };

  useEffect(() => {
    // Change the variable
    window.addEventListener("scroll", handleScroll);
    
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
      <section className='relative w-full h-screen mx-auto'>
        <HeroShapes screenWidth={window.innerWidth}/>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="hidden sm:block">
          <h1 className={`${styles.heroHeadText}`}>
            Ridha Chowdhury
          </h1>
          <h1 className={`${styles.heroSubText} mt-2 text-accent`}>
            {'<Software Engineer/>'}
          </h1>
          <div className="flex mt-4">
            <a href="https://www.linkedin.com/in/ridha-chowdhury/" target="_blank" rel="noopener noreferrer">
              <button className="w-10 h-10 mr-2">
                <img src={linkedin} alt="LinkedIn" className="w-full h-full" />
              </button>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <button className="w-10 h-10 mr-2">
                <img src={github_mark} alt="GitHub" className="w-full h-full" />
              </button>
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <button className="inline-flex flex-start items-center justify-center bg-accent hover:bg-accent/75 text-white font-bold py-2 px-4 rounded h-10">
                <img src={resume_icon} alt="Resume" className="w-8 h-8 m-0 p-0" />
                <h2 className={`${styles.heroResume} mt-0 text-sm md:text-base lg:text-lg`}>Resume</h2>
              </button>
            </a>
          </div>
        </div>
        <div className="sm:hidden">
          <h1 className={`${styles.mobile.heroHeadText}`}>
            Ridha
          </h1>
          <h1 className={`${styles.mobile.heroSubText} mt-2 text-accent`}>
            {'<SDE/>'}
          </h1>
          <a href="https://www.linkedin.com/in/ridha-chowdhury/" target="_blank" rel="noopener noreferrer">
              <button className="w-10 h-10 mr-2">
                <img src={linkedin} alt="LinkedIn" className="w-full h-full" />
              </button>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <button className="w-10 h-10 mr-2">
                <img src={github_mark} alt="GitHub" className="w-full h-full" />
              </button>
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <button className="inline-flex flex-start items-center justify-center bg-accent hover:bg-accent/75 text-white font-bold py-2 px-4 rounded h-10">
                <img src={resume_icon} alt="Resume" className="w-8 h-8 m-0 p-0" />
                <h2 className={`${styles.heroResume} mt-0 text-sm md:text-base lg:text-lg`}>Resume</h2>
              </button>
            </a>
          <div className="flex mt-4">
          </div>
        </div>
      </div>


        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-3 h-3 rounded-full bg-secondary'
              />
            </div>
          </a>
        </div> */}
      </section>
  );
}

export default Hero