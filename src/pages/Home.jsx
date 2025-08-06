import React from 'react'
import { motion } from 'framer-motion'
import main from '../assets/main.webp'
import About from './About'
import KeyFocus from './KeyFocus'
import Internship from './Internship'
import Contact from './Contact'
import Solution from './Solution'
import Support from './Support'

export default function Home() {
  return (
    <div>
      <section id='home' className='bg-primary relative font-Afacad pt-36 px-5 md:px-10 overflow-hidden '>
      {/* Animated Bubbles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1 }}
        className='w-28 h-28 top-7 -right-7 bg-[#FEB763]/70 rounded-full absolute z-0'
      ></motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ delay: 0.3, duration: 1 }}
        className='w-64 h-64 top-24 md:left-32 xl:left-80 bg-[#FEB763]/70 rounded-full absolute z-0'
      ></motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='w-20 h-20 md:bottom-64 top-[50%] right-20 bg-[#FEB763]/70 rounded-full absolute z-0'
      ></motion.div>

      {/* Top dots */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className='absolute gap-3 md:top-28 hidden md:flex'
      >
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className='w-2 h-2 rounded-full border'></div>
        ))}
      </motion.div>

      {/* Bottom dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className='absolute  gap-3 bottom-20 right-10 hidden lg:flex'
      >
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className='w-2 h-2 rounded-full border'></div>
        ))}
      </motion.div>

      {/* Title + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-col gap-y-4 justify-center items-center relative'
      >
        <h1 style={{ letterSpacing: "10px" }} className='xl:text-9xl select-none lg:text-7xl md:text-6xl text-5xl text-white font-semibold'>
          NEURA <span className='text-[#FEB763]'>AI</span>
        </h1>
        <p className='text-white md:text-4xl text-2xl text-center'>
          Affordable Intelligence for Global Healthcare.
        </p>
        <p className='text-white md:text-xl text-lg pt-3 text-center'> World’s First Cloud-Based R&D Company Advancing Healthcare Through AI and Innovative Medical Technologies.</p>
      </motion.div>

      {/* Bottom Section with Text and Image */}
      <div className='flex flex-col md:flex-row text-white items-center gap-10 mt-10 relative'>
        {/* Left Quote */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='lg:w-1/3 relative order-1'
        >
          {/* <p style={{ letterSpacing: "2px" }} className='flex flex-col gap-0'>
            <span className='text-7xl w-fit h-fit -mb-10'>“</span>
            Neura AI helps us identify and solve complex problems at their core using adaptive, intelligent, and personalized AI-driven solutions.
            It's time to experience smarter decisions, faster outcomes, and greater clarity.
          </p> */}
        </motion.div>

        {/* Center Image with yellow arc */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='lg:w-1/3 relative order-3 md:order-2'
        >
          <div className='absolute w-full h-[70%] -bottom-0 rounded-t-full bg-[#FEB763] z-0'></div>
          <img className='z-30 object-contain relative' src={main} alt="neura-ai-doctor" />
        </motion.div>

        {/* Right Info Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ letterSpacing: "2px" }}
          className='lg:w-1/3 relative order-2 md:order-3'
        >
          {/* <p>
            Neura AI stands out for its precision, innovation, and human-centric approach to artificial intelligence.
            The insights it generates are not just accurate — they’re transformative.
          </p> */}
        </motion.div>
      </div>
    </section>
    <About />
    <KeyFocus />
    <Solution />
    <Support />
    <Internship />
    <Contact />
    
    </div>
  )
}
