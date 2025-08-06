import React from 'react';
import { LuBrain, LuHeart } from "react-icons/lu";
import { GiKidneys, GiLoveInjection } from "react-icons/gi";
import { motion } from 'framer-motion';
import { BsLungs } from "react-icons/bs";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import './global.css';
import brain from '../assets/back.webp'
import cardio from '../assets/cardio.webp'
import kidney from '../assets/kidney.webp'
import hearticon from '../assets/heart.webp'
import skin from '../assets/skin.webp'
import dermatology from '../assets/dermatology.webp'
import lungs from '../assets/lungs.webp'
import hair from '../assets/hair.webp'
import hair2 from '../assets/hair2.webp'
import hairGrowthIcon from '../assets/hairGrowthIcon.webp' 
import hairFall from '../assets/hairFall.webp' 

export default function KeyFocus() {

     const focusAreas = [
        {
          img:brain ,
          icon: <LuBrain />,
          title: "Neurology",
          description: "Predict and prevent strokes, epilepsy, and neurodegeneration."
        },
        {
          img: cardio,
          Imgicon: hearticon,
          title: "Cardiology",
          description: "Detect cardiovascular disease before symptoms appear."
        },
        {
          img: kidney ,
          icon: <GiKidneys />,
          title: "Nephrology",
          description: "Predictive analytics for kidney health monitoring."
        },
        {
          img: dermatology,
          Imgicon: skin,
          title: "Dermatology",
          description: "AI-based skin anomaly classification and tracking."
        },
        {
          img: lungs,
          icon: <BsLungs />,
          title: "Pulmonology",
          description: "Early warning systems for chronic respiratory conditions."
        }
      ];
    
      const focusAreas2 = [
        {
          img: hair,
          Imgicon: hairGrowthIcon,
          title: "Hair Growth Solutions",
          description: "Stimulating natural hair regeneration."
        },
        {
          img: hair2,
          Imgicon: hairFall,
          title: "Chemotherapy Hair Fall Prevention",
          description: "Helping cancer patients retain their identity and confidence."
        }
      ];
  return (
    <section id='focus-area' className="px-5 lg:px-20 py-10 md:py-20 bg-primary font-Afacad">
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col gap-3 text-white'
        >
            <h1 style={{ letterSpacing: "3px" }} className='text-primary px-4 py-1 w-fit rounded-full bg-white font-semibold text-lg lg:text-xl'>What We Focus On</h1>
            <p className='font-semibold text-lg lg:text-2xl'>We are solving problems that matter the most, yet are often overlooked.</p>
            <p className='leading-loose'>We’re currently building AI-based early diagnostic and predictive tools in these critical domains:</p>
        </motion.div>
        {focusAreas.map((feat, i) => (
          <div key={i} className="container h-52 w-full">
            <div className="card relative h-full w-full transition duration-1000 hover:cursor-pointer ">
              {/* Front side */}
                <div className="front absolute flex flex-col h-full w-full items-center justify-center rounded-2xl shadow bg-[#1f2937] px-2 py-4 text-white">
                <div className="text-3xl mb-2 bg-gray-200 text-black p-3 rounded-full font-bold">
                    {feat.Imgicon ? (
                        <img src={feat.Imgicon} alt={feat.title} className="w-8" />
                    ) : (
                        feat.icon
                    )}
                </div>

                <p className="text-lg font-semibold text-center">{feat.title}</p>
                </div>

            {/* Back side */}
                <div
                className="back absolute flex h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-primary px-1 text-white shadow"
                >
                {/* Background image */}
                <img
                    src={feat.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-md"></div>
                
                {/* Foreground content */}
                <p className="font-bold text-xl relative z-10">{feat.title}</p>
                <p className="text-center text-base font-light relative z-10">{feat.description}</p>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Focus 2 */}
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col gap-2 text-white justify-center'
        >
            <p className='font-semibold text-lg lg:text-2xl leading-loose text-center'>Breakthrough innovations</p>
            <span className='text-white flex justify-center text-4xl'><FaChevronCircleRight /></span>
        </motion.div>
        {focusAreas2.map((feat, i) => (
          <div key={i} className="container h-52 w-full">
            <div className="card relative h-full w-full transition duration-1000 hover:cursor-pointer ">
              {/* Front side */}
                <div className="front absolute flex flex-col h-full w-full items-center justify-center rounded-2xl shadow bg-[#1f2937] px-2 py-4 text-white">
                <div className="text-3xl mb-2 bg-gray-200 text-black p-3 rounded-full">
                    {feat.Imgicon ? (
                        <img src={feat.Imgicon} alt={feat.title} className="w-8" />
                    ) : (
                        feat.icon
                    )}
                </div>

                <p className="text-lg font-semibold text-center">{feat.title}</p>
                </div>

            {/* Back side */}
                <div
                className="back absolute flex h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-primary px-1 text-white shadow"
                >
                {/* Background image */}
                <img
                    src={feat.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-md"></div>
                
                {/* Foreground content */}
                <p className="font-bold text-xl relative z-10">{feat.title}</p>
                <p className="text-center text-base font-light relative z-10">{feat.description}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}