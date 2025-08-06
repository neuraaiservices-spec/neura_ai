import React from 'react';
import internship from '../assets/internship2.webp';
import { FaHandPointRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Internship2() {
  return (
    <section id='internship' className='pt-10 lg:pt-20 font-Afacad'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10'>

        {/* Image + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className='lg:w-1/2 flex flex-col gap-4 lg:sticky lg:top-24 '
        >
          <div className='flex flex-col gap-4'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ letterSpacing: "3px" }}
              className='w-fit relative font-semibold text-white px-4 py-1 text-lg lg:text-xl rounded-full bg-primary'
            >
              2. Neura Training Program (Training Track)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className='leading-relaxed font-semibold'
            >
              Learn, build, and grow — from wherever you are
            </motion.p>
          </div>

          <img className='rounded-2xl w-full h-auto object-cover' src={internship} alt="internship" />
        </motion.div>

        {/* Text Description */}
        <div className='lg:w-1/2 flex flex-col gap-5 '>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className='leading-relaxed font-semibold'
          >
            The Neura Internship Program is a structured, skill-building program designed to train students who are passionate about healthcare technology but may not yet be ready
            for live R&D work. It offers a guided, mentored environment to explore biomedical engineering, AI in medicine, and real-world problem-solving.
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
            'Core concepts in AI for Healthcare, Medical Image Processing, Biomedical Signals, and Device R&D',
            'Build mini-projects with step-by-step mentorship',
            'Weekly tasks, doubt-clearing sessions, and a final showcase project',
            'Pathway to join our research internship after completion'
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
            '1st to pre-final year students in technical or life science disciplines',
            'Learners looking to upskill and transition into the biomedical R&D space',
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

          <p className='font-bold'>Why It’s Paid: </p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We charge a nominal fee to cover mentorship, platform access, and content development—ensuring quality, sustainability, and serious participation.
            All revenues go toward scholarships, R&D grants, and open-source projects to support underrepresented communities in healthcare innovation.
          </motion.p>

          <p className='font-bold'>Why We Do This: </p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We believe in open knowledge, equal opportunity, and impactful education. Whether you're ready to innovate today or prepare
            for tomorrow, we want to be your launchpad
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
      </div>
    </section>
  );
}
