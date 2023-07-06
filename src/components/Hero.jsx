import { motion } from 'framer-motion';

import { styles } from '../styles';
import { TicTacToeCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <TicTacToeCanvas/>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-accent'>Ridha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full-stack developer with a passion for building beautiful, functional, and scalable applications.
            <br />
            <span className='text-accent hover:text-[#bc9efc] cursor-pointer'>
              Contact me if you'd like to work.
            </span>
          </p>
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
  )
}

export default Hero