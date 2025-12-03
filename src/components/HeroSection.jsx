import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroSection({
  title='IES - Integrated Environmental Solutions', 
  subtitle='Professional MEP engineering consultancy services for all building types'
}){
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  const rotatingTexts = [
    'Professional MEP engineering consultancy services for all building types',
    'Energy-efficient solutions for sustainable built environments',
    'Innovative HVAC & refrigeration system design',
    'Building services engineering excellence across Pakistan'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3500) // Change every 3.5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container">
        {/* Fixed height container to prevent resizing */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-[400px] md:min-h-[450px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex-1 flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Fixed height container for rotating text - prevents size changes */}
            <div className="mb-8 relative h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-gray-700 text-lg leading-relaxed absolute top-0 left-0 right-0"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <motion.a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-md font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="/services" 
                className="inline-block border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-all font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="w-full lg:w-2/5 flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              <img 
                src="/logo.jpg" 
                alt="IES logo" 
                className="w-full h-auto rounded-lg shadow-xl" 
                loading="eager" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
