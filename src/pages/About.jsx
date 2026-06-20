import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.webp';
import vision from '../assets/vision.webp';
import NeuraLogo from '../components/NeuraLogo';

const fadeUp = { hidden:{opacity:0,y:30}, visible:{opacity:1,y:0,transition:{duration:0.7,ease:[0.22,1,0.36,1]}} };
const stagger = { visible:{transition:{staggerChildren:0.12}} };

export default function About() {
  return (
    <>
      {/* ── ABOUT — dark premium section ── */}
      <section id="about" className="py-24 lg:py-32 bg-primary-mid relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={stagger} className="text-center mb-20">
            <motion.div variants={fadeUp}><span className="section-tag">About Neura AI</span></motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-3xl lg:text-5xl text-white leading-tight mt-2 mb-5">
              We develop affordable<br/>medical solutions.<br/><span className="italic" style={{background:'linear-gradient(135deg,#ffffff 0%,#00c9a7 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Built for everyone.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Founded by biomedical engineers. We build medical devices and software that lower the cost of diagnosis and treatment.
            </motion.p>
          </motion.div>

          {/* Two-col */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={about} alt="About Neura AI" className="w-full object-cover" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={stagger} className="flex flex-col gap-6">
              <motion.div variants={fadeUp} className="border-l-2 border-teal pl-5">
                <p className="text-white/75 text-base leading-relaxed italic font-light">
                  "We focus on making healthcare affordable — through medical devices, software, and education."
                </p>
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/55 text-sm leading-relaxed">
                We develop medical solutions — hardware and software — for conditions like cardiac disease, neurological disorders, kidney health, and respiratory conditions. We also run <strong className="text-white font-semibold">NeuraEDU</strong>, an education division that gives engineering students practical experience in medical R&D.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {['Medical Device Development','Healthcare Software','Affordable Diagnostics','NeuraEDU'].map(t => (
                  <span key={t} className="bg-white/5 border border-white/10 text-white/50 text-xs font-medium px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEURAEDU SUBSIDIARY — light cream section ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
            className="bg-white rounded-3xl p-10 lg:p-14 shadow-apple-lg border border-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <NeuraLogo variant="dark" height={54} />
                  <span className="text-xs font-semibold text-text-mid bg-cream px-3 py-1 rounded-full border border-black/8">Education Division</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-primary mt-4 mb-4">
                  Introducing{' '}
                  <span style={{background:'linear-gradient(135deg,#0066cc,#00c9a7)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                    NeuraEDU
                  </span>
                </h3>
                <p className="text-text-mid text-sm leading-relaxed mb-6">
                  NeuraEDU is Neura AI's education division. We run workshops at colleges, online R&D training programmes, and support student projects — from idea to working medical prototype.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => document.getElementById('programs')?.scrollIntoView({behavior:'smooth'})}
                    className="bg-primary text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue transition-all">
                    See programmes
                  </button>
                  <button onClick={() => window.registerFor('workshop')}
                    className="border border-black/15 text-primary font-medium text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all">
                    Bring NeuraEDU to your college
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {icon:'🏫',title:'Workshops',desc:'Credit-based on-campus training'},
                  {icon:'🔬',title:'R&D Training',desc:'Online medical R&D programmes'},
                  {icon:'💡',title:'Project Support',desc:'From concept to working prototype'},
                  {icon:'📄',title:'Research Help',desc:'Publication & article guidance'},
                ].map(item => (
                  <div key={item.title} className="bg-cream rounded-2xl p-5 border border-black/5 hover:border-blue/20 transition-all">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <div className="font-semibold text-primary text-sm mb-1">{item.title}</div>
                    <div className="text-text-mid text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VISION — dark section ── */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={stagger} className="flex flex-col gap-5">
              <motion.div variants={fadeUp}><span className="section-tag">Our Vision</span></motion.div>
              <motion.h3 variants={fadeUp} className="font-display text-3xl lg:text-4xl text-white">
                What we're building towards.
              </motion.h3>
              {[
                {n:'01',t:'Medical solutions at lower cost.',d:'We build devices and software that do what expensive clinical tools do — at a price accessible to more hospitals and patients.'},
                {n:'02',t:'NeuraEDU — education division.',d:'We partner with colleges to train engineering students in medical R&D through workshops, online programmes, and hands-on projects.'},
                {n:'03',t:'Online training, no lab needed.',d:'NeuraEDU programmes run fully online. Students at any college can participate and get real medical R&D experience.'},
                {n:'04',t:'From project to prototype.',d:'We support students from the concept stage to a working medical device — and guide them through research paper publication if they want to go further.'},
              ].map(item => (
                <motion.div key={item.n} variants={fadeUp} className="flex gap-5 items-start group">
                  <span className="font-display text-xl text-teal/30 min-w-[32px] pt-0.5 group-hover:text-teal transition-colors">{item.n}</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.t}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}}>
              <div className="relative">
                <img src={vision} alt="Our Vision" className="w-full rounded-3xl object-cover" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
