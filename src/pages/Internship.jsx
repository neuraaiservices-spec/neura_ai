import React from 'react';
import internship from '../assets/internship.webp';
import { FaHandPointRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Internship2 from './Internship2';
import Testimonials from './Testimonials'
export default function Internship() {
  return (
    <section id='internship' className='px-5 lg:px-20 py-10 lg:py-20 font-Afacad'>
      <h1 style={{ letterSpacing: "2px", wordSpacing: "3px" }} className='text-center font-bold text-xl lg:text-3xl'>
        Internships & Learning Opportunities
      </h1>
      <p className='text-center text-lg py-4'>
        Fostering global talent to build the future of healthcare innovation.
      </p>

      <div className='flex flex-col-reverse lg:flex-row gap-10 justify-between items-start'>
        {/* Left Content Section */}
        <div className='flex flex-col gap-5 lg:w-1/2'>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className='leading-relaxed font-semibold'
          >
            The Neura Research Internship offers students and early professionals an opportunity to contribute to real-time, impactful healthcare projects. Interns collaborate with our
            global R&D team to develop AI models, explore medical device innovation, and solve real-world health challenges.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className='font-semibold'
          >
            What You’ll Work On:
          </motion.p>

          {[
            'Live AI projects in cardiology, neurology, nephrology, dermatology, and oncology',
            'Contribute to experimental tools for hair growth & chemotherapy-related hair loss',
            'Collaborate with multidisciplinary teams across countries',
            'Build a portfolio of industry-level work with mentorship from experts'
          ].map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true, amount: 0.3 }}
              className='flex items-center gap-2'
            >
              <span className='text-primary'><FaHandPointRight /></span>{item}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className='font-semibold'
          >
            Ideal for:
          </motion.p>

          {[
            'Final-year undergraduates, graduates, or PhD students in Biomedical, AI/ML, ECE, Biotechnology, or related fields',
            'Curious minds who want to build, test, and innovate—not just observe',
          ].map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true, amount: 0.3 }}
              className='flex items-center gap-2'
            >
              <span className='text-primary'><FaHandPointRight /></span>{item}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className='font-bold'>Note:</span> This internship is merit-based. Our goal is to support genuine talent with real opportunities
          </motion.p>

          <Link
            style={{ letterSpacing: "3px" }}
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            className='bg-primary cursor-pointer rounded-2xl w-full md:w-fit text-white px-6 py-2 flex justify-center md:justify-start'
          >
            Apply now
          </Link>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className='lg:w-1/2 flex flex-col gap-4 lg:sticky top-24 self-start'
        >
          <div className='flex flex-col items-end gap-4'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ letterSpacing: "3px" }}
              className='w-fit font-semibold text-white px-4 py-1 rounded-full text-lg lg:text-xl bg-primary'
            >
              1. Neura Research Internship
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className='leading-relaxed font-semibold'
            >
              Real-world R&D experience for passionate problem solvers
            </motion.p>
          </div>

          <img className='rounded-2xl w-full' src={internship} alt="internship" />
        </motion.div>
      </div>

      {/* Internship 2 Section */}
      <Internship2 />
      <Testimonials />
    </section>
  );
}
