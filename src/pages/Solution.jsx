import React from 'react'
import { motion } from 'framer-motion';
import hairSupport from '../assets/hairSupport.webp'
import Solution2 from './Solution2';

export default function Solution() {
  return (
    <div>
    <section id='solution' className='lg:mx-20 mx-5 font-Afacad py-10 lg:py-20 '>
      <h1 style={{ letterSpacing: "2px", wordSpacing: "3px" }} className='text-center font-bold text-xl lg:text-3xl pb-10'>
        Our Solutions and Platforms
      </h1> 
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-1/2 lg:sticky top-20 self-start flex flex-col gap-3'>
          <h1 className='text-white px-4 py-1 text-right rounded-full bg-primary w-fit font-semibold text-lg lg:text-xl tracking-wide'>AI Solutions</h1>
          <p className='text-xl lg:text-3xl'>Seamless AI, Ready to Deploy.</p>
          <img className='lg:h-96 object-contain rounded-lg' src={hairSupport} alt="" />
        </div>

        
        <div className='space-y-4 lg:w-1/2'>
            <h1 className=' text-base lg:text-lg font-semibold'>At Neura AI, we're building cloud-based, scalable, plug-and-play AI models that can be integrated into:</h1>

                           {[
                    { title: "Telemedicine Platforms",
                      text: `Deliver remote consultations and real-time diagnostics, enhancing accessibility and reducing patient wait times.` },

                    { title: "Hospitals & Diagnostic Centers", 
                      text: `Streamline patient care with integrated AI tools for faster diagnosis, treatment planning, and workflow efficiency.` },

                    { title: "Public Health Screening Programs", text:`Enable large-scale, proactive disease screening using smart analytics to detect risks early and improve community health outcomes.` },


                    { title: "Academic Research Pipelines", text: `Accelerate medical discovery with AI-assisted data analysis, pattern recognition, and automated research workflows.` },

                ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className='py-3'
                    >
                        <h2 className='text-xl font-semibold text-[#FEB763]'>{item.title}</h2>
                        <p className='mt-2 text-lg'>{item.text}</p>
                        <div className='mt-5 h-[1px] w-full bg-gray-500'></div>
                    </motion.div>
                ))}
                
            </div>

           
        </div>
         <div className='flex justify-center items-center'>
            <h1 className='text-center pt-5 text-lg lg:text-xl font-medium lg:max-w-3xl'>Our goal is to <span className='font-bold '>enable rapid diagnosis, risk prediction, and real-time health monitoring</span>, reducing diagnostic delays and improving
            outcomes globally.
            </h1>
         </div>
         <Solution2 />
    </section>
    
    </div>
  )
}
