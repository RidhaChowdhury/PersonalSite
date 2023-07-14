import React, { Suspense, useEffect, useState, useContext, createContext } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import HeroShapes from "./canvas/Shapes";

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);
  const scrollPositionContext = createContext(0);

  const handleScroll = () => {
    console.log(window.scrollY);
    const currentPosition = window.scrollY;
    scrollPositionContext = currentPosition;
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
    <scrollPositionContext.Provider value={scrollPositionContext}>
      <section className='relative w-full h-screen mx-auto'>
        <HeroShapes screenWidth={window.innerWidth}/>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="hidden sm:block">
            <h1 className={`${styles.heroHeadText}`}>
              Ridha Chowdhury
            </h1>
            <h1 className={`${styles.heroSubText} mt-2 text-accent`}>
              {'<Software Development Engineer/>'}
            </h1>
          </div>
          <div className="sm:hidden">
            <h1 className={`${styles.mobile.heroHeadText}`}>
              Ridha
            </h1>
            <h1 className={`${styles.mobile.heroSubText} mt-2 text-accent`}>
              {'<SDE/>'}
            </h1>
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
    </scrollPositionContext.Provider>
  )
}

export default Hero