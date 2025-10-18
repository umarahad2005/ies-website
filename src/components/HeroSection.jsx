import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection({
  title='IES - Integrated Environmental Solutions', 
  subtitle='Professional MEP engineering consultancy services for all building types'
}){
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex-1"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                Get in Touch
              </a>
              <a 
                href="/services" 
                className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Our Services
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="w-full lg:w-2/5"
          >
            <img 
              src="/logo.jpg" 
              alt="IES logo" 
              className="w-full h-auto rounded-lg shadow-xl" 
              loading="eager" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
