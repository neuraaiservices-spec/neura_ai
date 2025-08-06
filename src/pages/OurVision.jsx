import React from 'react';
import about from '../assets/vision.webp';
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GiArchiveResearch } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineAttachMoney } from "react-icons/md";


const aboutData = [
  {
    icon: <MdOutlineHealthAndSafety />,
    title: "Revolutionizing Healthcare Through Technology",
    desc: "We leverage cloud computing and AI to make medical research accessible and impactful."
  },
  {
    icon: <RiGlobalFill />,
    title: "Powered by Global Collaboration",
    desc: "Our platform connects scientists and students worldwide to drive affordable innovation."
  }
];

const visionData = [
  {
    icon: <HiOutlineMagnifyingGlass />,
    desc: "Use AI to detect diseases early, before they become life-threatening."
  },
  {
    icon: <GiArchiveResearch />,
    desc: "By decentralizing research, we enable fast, global solutions to urgent health challenges."
  },
  {
    icon: <GoLightBulb />,
    desc: "Empower global talent to solve unsolved problems in healthcare."
  },
  {
    icon: <MdOutlineAttachMoney />,
    desc: "Eliminate financial and geographical barriers in healthcare delivery."
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function OurVision() {
  return (
    <section id='about' className='pt-14 mx-5 lg:mx-20 font-Afacad'>
      <div className='flex flex-col lg:flex-row gap-10 items-center'>
        {/* Image */}
        <motion.div
          className='lg:w-1/2 lg:sticky top-20 self-start flex flex-col gap-3'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }} 
        >
          <div className='flex justify-end lg:hidden'>
              <motion.h1 variants={fadeUp} className='text-white px-4 py-1 text-right rounded-full bg-primary w-fit font-semibold text-lg tracking-wide'>
                  Our Vision
              </motion.h1>
          </div>
          {/* <motion.p
            className=' text-xl lg:text-3xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Neura AI — Intelligence, In Tune with Nature.
          </motion.p> */}

          <motion.img 
          initial={{opacity :0, x:30}}
          whileInView={{opacity :1, x:0}}
          transition={{duration:0.5 , delay:0.4}}
          viewport={{once:true , amount:0.3}}
          src={about} alt="About us" className='rounded-lg w-full h-auto object-cover' />
        </motion.div>
        {/* Content */}
        <motion.div 
          className='lg:w-1/2 flex flex-col gap-6'
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once :true, amount: 0.3 }}
        >

          {/* Vision Section */}
          <motion.h1 variants={fadeUp} className='hidden lg:flex text-white px-4 py-1 rounded-full bg-primary w-fit font-semibold text-xl tracking-wide'>Our Vision</motion.h1>
          <motion.h2 variants={fadeUp} className='text-xl md:text-2xl font-bold'>
            To make healthcare accessible, affordable, and intelligent for every human being—no matter where they live or what they earn.
          </motion.h2>
          <motion.h2 variants={fadeUp} className=' font-semibold'>We aim to:</motion.h2>
          <div className='flex flex-col gap-5'>
            {visionData.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className='flex items-center gap-3'>
                <span className='bg-gray-200 p-4 rounded-full text-primary text-2xl'>{item.icon}</span> 
                  <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div><h1 className='pt-8 text-lg md:text-xl flex justify-center items-center font-semibold'>Healthcare should not wait for symptoms. It should act before they exist.</h1></div>
    </section>
  );
}
