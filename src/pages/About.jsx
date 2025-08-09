import React from 'react';
import about from '../assets/about.webp';
import { motion } from 'framer-motion';
import OurVision from './OurVision';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section id='about' className='py-16 font-Afacad'>
      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:mx-20 mx-5 items-center'>

        {/* Text Content */}
        <motion.div 
          className='lg:w-1/2 flex flex-col gap-6'
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 variants={fadeUp} className='hidden lg:flex text-white px-4 py-1 rounded-full bg-primary w-fit font-semibold text-xl tracking-wide'>
            Who We Are
          </motion.h1>

          <motion.h2 variants={fadeUp} className='text-xl md:text-2xl leading-snug'>
            At <span className='font-bold'>Neura AI</span>, we're reimagining healthcare with a singular mission:
          </motion.h2>

          <motion.h2 variants={fadeUp} className='text-xl md:text-2xl font-bold '>
            To make healthcare accessible to everyone—regardless of their economic background.
          </motion.h2>

          <div className='flex flex-col gap-4 text-lg '>
            <motion.p variants={fadeUp}>
              We are the world's first cloud-based healthcare R&D company, bringing together scientists, researchers, and students across borders to build affordable, intelligent solutions powered by AI.
            </motion.p>
            <motion.p variants={fadeUp}>
              We believe in prevention over cure, collaboration over competition, and innovation for impact.
            </motion.p>
          </div>
        </motion.div>

        {/* Image + Tagline */}
        <motion.div
          className='lg:w-1/2 lg:sticky top-20 self-start flex flex-col gap-4'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='flex justify-end lg:hidden'>
            <motion.h1 variants={fadeUp} className='text-white px-4 py-1 text-right rounded-full bg-primary w-fit font-semibold text-lg tracking-wide'>
            Who We Are
          </motion.h1>
          </div>
          {/* <motion.p
            className='text-right text-xl lg:text-3xl italic font-light'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Neura AI, Naturally aligned.
          </motion.p> */}

          <motion.img 
            src={about} 
            alt="About us" 
            className='rounded-lg w-full h-auto object-cover shadow-xl'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>
      </div>

      <OurVision />
    </section>
  );
}

