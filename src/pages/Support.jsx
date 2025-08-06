import React from 'react';
import support from '../assets/contact.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Support() {
  return (
    <section className='font-Afacad px-5 lg:px-20 py-10 bg-primary'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='flex flex-col-reverse lg:flex-row items-center gap-10'
      >
        {/* Text Content */}
        <div className='lg:w-1/2 flex flex-col gap-5 text-white'>
          <h1 className='text-primary px-4 py-1 w-fit rounded-full bg-white font-semibold text-lg lg:text-xl'>
            Support Innovation in Healthcare
          </h1>
          <h1 className='font-medium leading-loose text-xl lg:text-2xl'>
            Are you a <span className='font-bold'>research lab, healthcare institution, or funding partner</span> looking to support groundbreaking solutions in AI or medical technology?
          </h1>
          <p className='text-lg'>
            We welcome <span className='font-bold'>collaborations, lab partnerships, and early-stage funding</span> to bring these impactful solutions to life
          </p>

          <div className='flex items-center gap-3 flex-wrap'>
            <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            className='bg-white w-fit text-primary flex items-center gap-2 px-5 py-1 rounded-full group cursor-pointer'
          >
            <p
              style={{ letterSpacing: "3px" }}
            >
              Contact
            </p>
            <span className='group-hover:-rotate-45  transition-all ease-in-out duration-200'>
              <FaArrowRightLong />
            </span>
          </Link>
          <p>to explore partnership opportunities.</p>
          </div>

          {/* Extra content */}
          <p className='text-sm text-gray-300 italic pt-2'>
            Together, let’s shape the future of medical innovation.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          className='lg:w-1/2'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={support} alt="Contact Us" className='w-full rounded-xl shadow-lg' />
        </motion.div>
      </motion.div>
    </section>
  );
}
