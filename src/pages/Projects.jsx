import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects(){
  useEffect(()=>{
    document.title = 'IES - Projects'
    setMeta('IES Projects','Featured projects by IES - Leading MEP engineering consultancy')
  },[])

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Healthcare', 'Educational', 'Commercial', 'Industrial', 'Defense', 'Hospitality']

  const projects = [
    {
      title: 'LUMS School of Science and Engineering',
      category: 'Educational',
      location: 'Lahore, Pakistan',
      capacity: '3000 TR',
      description: 'Advanced Educational Project with BSL-3 Labs - HVAC Design Review',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      icon: '🎓',
      color: 'from-green-500 to-emerald-600',
      tags: ['BSL-3 Labs', 'Science Labs', 'Design Review']
    },
    {
      title: 'Punjab Institute of Forensic Sciences',
      category: 'Healthcare',
      location: 'Lahore, Pakistan',
      capacity: '1200 TR',
      description: 'Advanced Project for crime identification with BSL-3 Labs - HVAC Design Concept Review',
      image: 'https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=800&q=80',
      icon: '🔬',
      color: 'from-blue-500 to-cyan-600',
      tags: ['BSL-3 Labs', 'Forensic', 'Bid Evaluation']
    },
    {
      title: 'Shaukat Khanum Memorial Cancer Hospital',
      category: 'Healthcare',
      location: 'Lahore, Pakistan',
      capacity: '1300 TR',
      description: 'World-renowned hospital with international standards - Complete HVAC Design & Site Supervision',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      icon: '🏥',
      color: 'from-green-600 to-emerald-500',
      tags: ['Hospital', 'Tender Documentation', 'Site Supervision']
    },
    {
      title: 'Gift University',
      category: 'Educational',
      location: 'Gujranwala, Pakistan',
      capacity: '270 TR',
      description: 'Complete HVAC Design, Tender Documentation & Top Supervision',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
      icon: '🎓',
      color: 'from-blue-600 to-cyan-500',
      tags: ['HVAC Design', 'Tender Documentation', 'Supervision']
    },
    {
      title: 'Bank Alfalah - The Mall',
      category: 'Commercial',
      location: 'Lahore, Pakistan',
      capacity: '400 TR',
      description: 'High-profile high-rise office building with Building Management System',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      icon: '🏢',
      color: 'from-green-500 to-emerald-600',
      tags: ['BMS', 'High-Rise', 'Site Supervision']
    },
    {
      title: 'CMH Rawalpindi OT Block',
      category: 'Healthcare',
      location: 'Rawalpindi, Pakistan',
      capacity: '650 TR',
      description: '20 Operating Theaters with supporting departments - HVAC Design',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      icon: '⚕️',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Operating Theaters', 'Military Hospital', 'HVAC Design']
    },
    {
      title: 'NHA Head Office Building',
      category: 'Commercial',
      location: 'Islamabad, Pakistan',
      capacity: '675 TR',
      description: 'HVAC Design, Tender Documentation & Top Supervision',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      icon: '🏛️',
      color: 'from-green-600 to-emerald-500',
      tags: ['Government', 'HVAC Design', 'Documentation']
    },
    {
      title: 'Shaukat Khanum Research Lab Addition',
      category: 'Healthcare',
      location: 'Lahore, Pakistan',
      capacity: '350 TR',
      description: 'International standards research lab with sophisticated environmental controls',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
      icon: '🔧',
      color: 'from-blue-600 to-cyan-500',
      tags: ['Research Lab', 'Environmental Controls', 'International Standards']
    },
    {
      title: 'Defense Forces Main Building',
      category: 'Defense',
      location: 'Islamabad, Pakistan',
      capacity: '550 TR',
      description: 'HVAC Design, Tender Documentation & Top Supervision',
      image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&q=80',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-600',
      tags: ['Defense', 'Complete Design', 'Top Supervision']
    },
    {
      title: 'Defense Forces Data Center',
      category: 'Defense',
      location: 'Islamabad, Pakistan',
      capacity: '140 TR',
      description: 'Specialized HVAC Design for Data Center facility',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      icon: '💻',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Data Center', 'Precision Cooling', 'Critical Infrastructure']
    },
    {
      title: 'Defense Forces Auditorium',
      category: 'Defense',
      location: 'Islamabad, Pakistan',
      capacity: '80 TR',
      description: 'HVAC Design for performance auditorium with acoustical considerations',
      image: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=800&q=80',
      icon: '🎭',
      color: 'from-green-600 to-emerald-500',
      tags: ['Auditorium', 'Acoustics', 'HVAC Design']
    },
    {
      title: 'PMO Hospital Taxila',
      category: 'Healthcare',
      location: 'Taxila, Pakistan',
      capacity: '450 TR',
      description: 'Out Patient Building of international standards with HVAC Design',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
      icon: '🏥',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Hospital', 'International Standards', 'Tender Documentation']
    },
    {
      title: 'Tahir Heart Institute Operating Theaters',
      category: 'Healthcare',
      location: 'Chenab Nagar, Pakistan',
      capacity: '65 TR',
      description: 'Operating Theaters of international standards - HVAC Design & Documentation',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
      icon: '❤️',
      color: 'from-green-500 to-emerald-600',
      tags: ['Cardiac Care', 'Operating Theaters', 'International Standards']
    },
    {
      title: 'Air Weapon Complex ICS Fab Building',
      category: 'Industrial',
      location: 'Wah Cantt, Pakistan',
      capacity: '450 TR',
      description: 'Clean room standards Class 100 - HVAC System vetting and re-design',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      icon: '🏭',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Clean Room', 'Class 100', 'Industrial']
    },
    {
      title: 'Shaukat Khanum Cyclotron Vault & Hot Lab',
      category: 'Healthcare',
      location: 'Lahore, Pakistan',
      capacity: '90 TR',
      description: 'Sophisticated environmental controls for Cyclotron vault & hot lab',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      icon: '☢️',
      color: 'from-green-600 to-emerald-500',
      tags: ['Cyclotron', 'Nuclear Medicine', 'Environmental Controls']
    },
    {
      title: 'Shaukat Khanum OT Upgradation',
      category: 'Healthcare',
      location: 'Lahore, Pakistan',
      capacity: '140 TR',
      description: 'Upgradation of 4 OTs and Addition of 4 New Operating Theaters',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
      icon: '🏥',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Operating Theaters', 'Upgradation', 'International Standards']
    },
    {
      title: 'Shaukat Khanum Patient Out Department',
      category: 'Healthcare',
      location: 'Lahore, Pakistan',
      capacity: '1400 TR',
      description: 'Out Patient Building with sophisticated environmental controls',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
      icon: '🏥',
      color: 'from-green-500 to-emerald-600',
      tags: ['OPD', 'Environmental Controls', 'Complete Design']
    },
    {
      title: 'Bab-e-Pakistan Monument Complex',
      category: 'Commercial',
      location: 'Lahore, Pakistan',
      capacity: '1000 TR',
      description: 'Auditorium, Performance Theatre, Museum, Library & Display Art Gallery - Sophisticated Environmental Design',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      icon: '🏛️',
      color: 'from-blue-600 to-cyan-500',
      tags: ['Monument', 'Museum', 'Sophisticated Design']
    },
    {
      title: 'Kings Mall Gujranwala',
      category: 'Commercial',
      location: 'Gujranwala, Pakistan',
      capacity: 'Large Scale',
      description: 'Complete HVAC Design, Tender Documentation & Top Supervision',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
      icon: '🏬',
      color: 'from-green-600 to-emerald-500',
      tags: ['Mall', 'Retail', 'Complete Design']
    },
    {
      title: 'ABB Tower',
      category: 'Commercial',
      location: 'Islamabad, Pakistan',
      capacity: 'Commercial',
      description: 'HVAC Design & Top Supervision for corporate tower',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      icon: '🏢',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Corporate', 'HVAC Design', 'Top Supervision']
    },
    {
      title: 'Salt n Pepper Restaurants',
      category: 'Hospitality',
      location: 'Karachi & Lahore, Pakistan',
      capacity: 'Multiple Locations',
      description: 'HVAC design, Tender documentation and detailed Site supervision',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      icon: '🍽️',
      color: 'from-green-500 to-emerald-600',
      tags: ['Restaurant', 'Kitchen Ventilation', 'HVAC Design']
    },
    {
      title: 'Jacaranda Club DHA',
      category: 'Hospitality',
      location: 'Islamabad, Pakistan',
      capacity: 'Hospitality',
      description: 'HVAC Design, Tender Documentation & Top Supervision',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      icon: '🏊',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Club', 'Hospitality', 'Complete Design']
    },
    {
      title: 'Al-Khidmat Hospital',
      category: 'Healthcare',
      location: 'Pakistan',
      capacity: 'Healthcare Facility',
      description: 'HVAC Design for Healthcare facility as per International Standard',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
      icon: '🏥',
      color: 'from-green-600 to-emerald-500',
      tags: ['Hospital', 'International Standards', 'HVAC Design']
    },
    {
      title: 'Star Laboratories',
      category: 'Industrial',
      location: 'Pakistan',
      capacity: 'Clean Room Class A',
      description: 'HVAC Design for Clean Rooms Class A - Pharmaceutical grade',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
      icon: '🧪',
      color: 'from-blue-500 to-cyan-600',
      tags: ['Clean Room', 'Class A', 'Pharmaceutical']
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
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white py-32 -mt-12 pt-40 overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)'
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-green-400/25 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/25 rounded-full blur-3xl"
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
              className="inline-block mb-6 px-6 py-3 bg-green-400/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-green-400/40 text-green-100 shadow-lg shadow-green-500/20"
            >
              ✨ Portfolio of Excellence
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Projects</span>
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
                { number: '50,000+', label: 'TR Capacity', icon: '❄️' },
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
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredProject(idx)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative cursor-pointer"
                >
                  <motion.div 
                    className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
                    style={{
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    }}
                    whileHover={{ 
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = idx % 2 === 0 
                        ? '0 25px 50px rgba(34, 197, 94, 0.3)' 
                        : '0 25px 50px rgba(59, 130, 246, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
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
                        className="absolute top-3 right-3 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg"
                        animate={{
                          rotate: hoveredProject === idx ? 360 : 0
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        {project.icon}
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-1.5 text-sm">
                        <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{project.location}</span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-3 text-sm">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-bold text-green-600 text-xs">{project.capacity}</span>
                      </div>

                      <p className="text-gray-700 mb-3 line-clamp-2 text-sm">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 2).map((tag, i) => (
                          <span 
                            key={i}
                            className="px-2 py-0.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-[10px] font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className={`w-full py-2 rounded-lg font-semibold text-sm text-white bg-gradient-to-r ${project.color} flex items-center justify-center gap-1.5 group-hover:shadow-lg transition-all`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: hoveredProject === idx ? 3 : 0 }}
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
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-start z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{selectedProject.icon}</span>
                    <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-bold text-green-600">{selectedProject.capacity}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-6">
                {/* Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-40`}></div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold border border-green-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="text-green-600 font-bold text-sm mb-1">Category</div>
                    <div className="text-gray-900 font-bold text-xl">{selectedProject.category}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="text-green-600 font-bold text-sm mb-1">Capacity</div>
                    <div className="text-gray-900 font-bold text-xl">{selectedProject.capacity}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="text-green-600 font-bold text-sm mb-1">Location</div>
                    <div className="text-gray-900 font-bold text-xl">{selectedProject.location}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${selectedProject.color} flex items-center justify-center gap-2 shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discuss Similar Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how we can bring your vision to life with our proven MEP engineering expertise.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
