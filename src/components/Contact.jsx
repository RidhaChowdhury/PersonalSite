import {useState, useRef} from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import SectionComponent from './SectionComponent';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// template_8x2o0jr service_qmw30yi L1RiYlKR6plOqnQfk

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        'service_qmw30yi',
        'template_8x2o0jr',
        {
          from_name: form.name,
          to_name: "Ridha Chowdhury",
          from_email: form.email,
          to_email: "chowdhuryridha@gmail.com",
          message: form.message,
        },
        'L1RiYlKR6plOqnQfk'
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");
  
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
  
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };  

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.25, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'  
      >
        <SectionComponent
          introductionText='Get in touch'
          overviewText='Contact.'
          transitionDelay={0.25}
          transitionDuration={1}/>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>

            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>

            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>

            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <motion.button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
              initial='initial'
              whileHover='hover'
              whileTap='click'
              variants={buttonAnimation}
              onClick={handleSubmit}
            >
              <motion.p
                variants={buttonTextAnimation}
              >
                {
                  
                  loading ? 'Sending...' : 'Send'
                  
                }
              </motion.p>
            </motion.button>
          </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.5, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

const buttonAnimation = {
  initial: {
    scale: 1.05,
    rotateX: -20,
    translateY: -10,
    boxShadow: "5px 15px 20px rgba(0, 0, 0, 1)"
  },
  hover: {
    scale: 1.1,
  },
  click: {
    scale: 0.9,
    rotateX: 0,
    translateY: 0,
    boxShadow: "5px 15px 20px rgba(0, 0, 0, 0)"
  }
};

const buttonTextAnimation = {
  initial: {
    scale: 1.05,
    rotateX: -10,
    translateY: -2,
  },
  hover: {
    scale: 1.1,
  },
  click: {
    scale: 0.9,
    rotateX: 0,
    translateY: 0,
  }
}

export default SectionWrapper(Contact, 'contact')