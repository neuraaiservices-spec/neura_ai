import React from 'react'
import { motion } from 'framer-motion';
import hairSupport from '../assets/hairGrowth.webp'

export default function Solution2() {
  return (
    <section id='solution' className='font-Afacad lg:pt-20 pt-10'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='space-y-4 lg:w-1/2 order-2 lg:order-1'>
            <h1 className=' text-base lg:text-lg font-semibold'>We are also engineering medical devices that address unmet needs in clinical care:</h1>

                           {[
                    { title: "Hair Fall Prevention for Cancer Patients",
                      text: `A non-invasive solution designed to minimize chemotherapy-induced hair loss and preserve patient dignity during treatment.` },


                    { title: "Hair Growth Stimulators", text: `A medically-supervised device that leverages bio-stimulation techniques to support natural hair regrowth after medical treatment.` },
                   
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

            <div className='lg:w-1/2 lg:sticky top-20 self-start flex flex-col gap-3 order-1 lg:order-2'>
                <h1 className='text-white px-4 py-1 text-right rounded-full bg-primary w-fit font-semibold text-lg lg:text-xl tracking-wide'>Medical Device Solutions</h1>
                <p className='text-xl lg:text-3xl'>Revive Your Roots, Regrow with Confidence.</p>
                <img className='lg:h- object-contain rounded-lg' src={hairSupport} alt="" />
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <h1 className='text-center pt-5 text-lg lg:text-xl font-medium lg:max-w-3xl'>These innovations aim to improve both <span className='font-bold '>physical and emotional recovery</span>, enhancing the quality of life for patients.
            </h1>
         </div>
    </section>
  )
}
