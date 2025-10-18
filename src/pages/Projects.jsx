import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects(){
  useEffect(()=>{
    document.title = 'IES - Projects'
    setMeta('IES Projects','Featured projects by IES - Leading MEP engineering consultancy')
  },[])

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const categories = ['All', 'Commercial', 'Healthcare', 'Industrial', 'Hospitality']

  const projects = [
    {
      title: 'Mall of B-17',
      category: 'Commercial',
      location: 'Islamabad, Pakistan',
      area: '600,000 sqft',
      description: 'State-of-the-art shopping mall with advanced HVAC and MEP systems',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
      icon: '🏬',
      color: 'from-green-600 to-emerald-600',
      tags: ['HVAC', 'Electrical', 'Plumbing', 'Fire Safety']
    },
    {
      title: 'Pelican Mall',
      category: 'Commercial',
      location: 'Lahore, Pakistan',
      area: '560,000 sqft',
      description: 'Modern retail complex with energy-efficient MEP design',
      image: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&q=80',
      icon: '🛍️',
      color: 'from-blue-600 to-cyan-600',
      tags: ['BIM', 'Energy Audit', 'HVAC']
    },
    {
      title: 'Mall of Multan',
      category: 'Commercial',
      location: 'Multan, Pakistan',
      area: '180,000 sqft',
      description: 'Regional shopping destination with comprehensive MEP solutions',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
      icon: '🏪',
      color: 'from-green-600 to-teal-600',
      tags: ['HVAC', 'Sustainability', 'BIM']
    },
    {
      title: 'Commercial Tower Project',
      category: 'Commercial',
      location: 'Karachi, Pakistan',
      area: '360,000 sqft',
      description: 'High-rise commercial tower with smart building systems',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      icon: '🏢',
      color: 'from-orange-600 to-red-600',
      tags: ['Smart Systems', 'HVAC', 'Electrical']
    },
    {
      title: 'Haier Office Building',
      category: 'Commercial',
      location: 'Lahore, Pakistan',
      area: 'Corporate Campus',
      description: 'Modern office facility with advanced environmental controls',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      icon: '🏭',
      color: 'from-green-600 to-emerald-600',
      tags: ['Office MEP', 'HVAC', 'Automation']
    },
    {
      title: 'ABB Tower',
      category: 'Industrial',
      location: 'Islamabad, Pakistan',
      area: '190,000 sqft',
      description: 'Industrial facility with specialized MEP infrastructure',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      icon: '⚡',
      color: 'from-yellow-600 to-orange-600',
      tags: ['Industrial MEP', 'Power Systems', 'HVAC']
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white py-32 -mt-12 pt-40 overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)'
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity
          }}
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20"
            >
              ✨ Portfolio of Excellence
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Projects</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Delivering engineering excellence across Pakistan and beyond
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { number: '500+', label: 'Projects Completed', icon: '🏗️' },
                { number: '2M+', label: 'Sqft Delivered', icon: '📐' },
                { number: '15+', label: 'Years Excellence', icon: '⭐' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-md">
        <div className="container">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <span className="text-gray-600 font-semibold">Filter:</span>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -15 }}
                  onHoverStart={() => setHoveredProject(idx)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === idx ? 1.1 : 1
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
                      
                      {/* Icon Badge */}
                      <motion.div
                        className="absolute top-4 right-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                        animate={{
                          rotate: hoveredProject === idx ? 360 : 0
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        {project.icon}
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-800">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{project.location}</span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                        <span className="font-bold text-green-600">{project.area}</span>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <motion.button
                        className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${project.color} flex items-center justify-center gap-2 group-hover:shadow-lg transition-all`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: hoveredProject === idx ? 5 : 0 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.button>
                    </div>

                    {/* Hover Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                      animate={{
                        x: hoveredProject === idx ? ['100%', '-100%'] : '100%'
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)'
          }}
        />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-2xl text-green-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our proven MEP engineering expertise.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-white text-green-600 px-12 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
