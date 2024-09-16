'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedQuoteSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/quote.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: -1 }}></div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          className="container mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            {/* Text Content */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 flex justify-center mb-8 lg:mb-0"
            >
              <motion.img
                src="/qoute.jpg"
                alt="Author Name"
                className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:w-1/2 text-white">
              <motion.blockquote 
                className="text-3xl md:text-4xl font-serif italic mb-6"
                variants={itemVariants}
              >
                &quot;That&apos;s one small step for a man, one giant leap for mankind&quot;
              </motion.blockquote>
              <motion.p 
                className="text-xl mb-6"
                variants={itemVariants}
              >
                - Neil Alden Armstrong 
              </motion.p>
              <motion.p 
                className="text-lg"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium 
              </motion.p>
            </motion.div>
          </div>

          {/* Explore Exoplanets Button */}
          <motion.div 
            className="flex justify-center mt-8"
            variants={itemVariants}
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-indigo-900"
            >
              Explore Exoplanets
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedQuoteSection;