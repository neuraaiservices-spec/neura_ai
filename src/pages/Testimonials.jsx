import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import videoPlay from '../assets/videos/Video Play button orange.json';
import Lottie from 'react-lottie';

export default function Testimonials() {
  const testimonialData = [
    {
      video: video1,
      title: "Student 1",
      description:
        "This platform gave me the confidence and real-world skills to grow. The journey has been incredible!",
    },
    {
      video: video2,
      title: "Student 2",
      description:
        "I learned so much and built amazing projects that I never thought possible. Highly recommend this experience!",
    },
    {
      video: video3,
      title: "Student 3",
      description:
        "Through mentorship and hands-on projects, I gained insights that truly prepared me for the industry.",
    },
    {
      video: video4,
      title: "Student 4",
      description:
        "A transformative journey of learning and discovery. This platform elevates your skills in real-world scenarios.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable background scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: videoPlay,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-100 font-Afacad" id="testimonials">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
        Student Testimonials
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {testimonialData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="rounded-xl relative overflow-hidden shadow-lg bg-white cursor-pointer"
            onClick={() => openModal(testimonial.video)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <video
              className="relative w-full h-64 object-cover"
              src={testimonial.video}
              preload="metadata"
              muted
              loop
            />
            {/* Lottie Centered */}
            <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center pointer-events-none">
              <div className="w-16">
                <Lottie options={defaultOptions} />
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-sm text-gray-600">{testimonial.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl p-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white text-3xl font-bold"
              >
                &times;
              </button>
              <video
                src={currentVideo}
                controls
                autoPlay
                className="w-full max-h-[90vh] rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
