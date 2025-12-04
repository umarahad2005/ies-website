import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home(){
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(()=>{
    document.title = 'IES - Integrated & Efficient Solutions'
    setMeta('IES - Integrated & Efficient Solutions','Leading MEP Engineering Consultancy in Pakistan - Professional engineering services, projects and products.')
  },[])

  // Hero slider images with CDC-style storytelling
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
      title: 'Transforming Integrated Design Solutions',
      subtitle: 'Excellence in MEP Engineering for Over 30 Years'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80',
      title: 'Building Tomorrow\'s Infrastructure Today',
      subtitle: '500+ Projects Delivered with Precision & Innovation'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
      title: 'Building Sustainable Energy Solutions',
      subtitle: 'Leading the Way in Green Building Technology'
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
      title: 'Smart Engineering, Smarter Buildings',
      subtitle: 'Advanced HVAC & MEP Systems for Modern Infrastructure'
    }
  ]

  // Auto-advance slider - faster timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000) // Change slide every 3 seconds (faster)
    
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { number: '30+', label: 'Years of Experience', icon: '📅', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80' },
    { number: '500+', label: 'Projects Completed', icon: '🏗️', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80' },
    { number: '10+', label: 'Training Sessions', icon: '📚', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80' },
    { number: '12+', label: 'Domains of Service', icon: '⚙️', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' }
  ]

  const services = [
    {
      icon: '🏢',
      title: 'Commercial Buildings',
      description: 'Shopping malls, offices, and commercial complexes',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      icon: '🏥',
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, and medical centers',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
    },
    {
      icon: '🏨',
      title: 'Hospitality',
      description: 'Hotels, resorts, and entertainment venues',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
    },
    {
      icon: '🏭',
      title: 'Industrial',
      description: 'Manufacturing facilities and industrial plants',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80'
    }
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white -mt-12 pt-24 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Image Slider Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-900/85 to-green-900/95"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block mb-4 px-4 py-2 bg-green-400/30 backdrop-blur-sm rounded-full text-sm font-semibold text-green-100 border border-green-400/50 shadow-lg shadow-green-500/20"
              >
                ✨ Leading MEP Engineering Consultancy
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link 
                  to="/projects" 
                  className="group bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:shadow-2xl hover:shadow-green-500/30 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2 transform hover:scale-105"
                >
                  View Projects
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/30 hover:border-white/50 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Slider Navigation Dots */}
              <motion.div 
                className="flex gap-3 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-12 bg-green-400 shadow-lg shadow-green-400/50' 
                        : 'w-2 bg-white/30 hover:bg-green-300/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                  alt="Modern Architecture" 
                  className="rounded-3xl shadow-2xl transform perspective-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent rounded-3xl"></div>
                
                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  style={{ transition: "none" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🏆</div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">500+</div>
                      <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
        
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border border-gray-100 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 overflow-hidden">
                    <img src={stat.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="text-6xl mb-3 relative z-10">{stat.icon}</div>
                  <motion.div 
                    className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium relative z-10">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section with Image Gallery */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="/logos/logo-ies.jpg" 
                    alt="IES Logo" 
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mt-8"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" 
                    alt="Engineering" 
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="-mt-8"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" 
                    alt="HVAC Systems" 
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" 
                    alt="Modern Building" 
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-600"
              >
                🏢 About IES
              </motion.div>
              
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                IES at <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Core!</span>
              </h2>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                IES was founded with a commitment to quality design which we achieve by working closely with our clients, listening, and mapping their needs and meeting the project parameters (particularly Cost, Time and Quality).
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                We adopt international best practices and apply the latest project and data management technologies, thus combining experience with innovation.
              </p>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 group text-lg"
              >
                Learn More About Us
                <motion.svg 
                  className="w-6 h-6 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values with Images */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-gray-600 text-xl">The principles that drive our success</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Mission',
                icon: '🎯',
                description: 'To provide innovative, efficient, sustainable, and cost-effective engineered solutions.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
                gradient: 'from-green-400 via-emerald-500 to-green-600',
                bgColor: 'from-green-50 to-emerald-50'
              },
              {
                title: 'Values',
                icon: '💎',
                description: 'We take personal responsibility to deliver on our promises to our customers, suppliers and stakeholders.',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
                gradient: 'from-blue-500 via-cyan-500 to-blue-600',
                bgColor: 'from-blue-100 to-cyan-100'
              },
              {
                title: 'Vision',
                icon: '🔭',
                description: 'IES will be the leader in providing energy-efficient and cost-effective solutions for engineering projects.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
                gradient: 'from-green-500 via-emerald-500 to-green-600',
                bgColor: 'from-green-50 to-emerald-50'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Gradient Background Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10 text-8xl drop-shadow-lg">{item.icon}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 bg-white">
                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview with Images */}
      <section className="py-24 bg-gradient-to-br from-green-950 via-emerald-900 to-green-950 text-white relative overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">Market Segments We Serve</h2>
            <p className="text-gray-300 text-xl">Comprehensive MEP solutions across all building types</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="text-6xl mb-3">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-emerald-600/0 group-hover:from-green-500/20 group-hover:to-emerald-600/20 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/services" 
              className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:shadow-2xl hover:shadow-green-500/30 text-white px-10 py-4 rounded-xl font-semibold transition-all shadow-lg transform hover:scale-105"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Proud Partners Section with Marquee */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Proud Partners</span>
            </h2>
            <p className="text-gray-600 text-xl">Trusted by leading organizations across Pakistan</p>
          </motion.div>
        </div>

        {/* Animated Marquee */}
        <div className="relative">
          
          <motion.div
            className="flex gap-12 py-8"
            animate={{
              x: [0, -1800]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {[
              '/logos/projectpics/download.png',
              '/logos/projectpics/download (1).png',
              '/logos/projectpics/download (2).png',
              '/logos/projectpics/download (3).png',
              '/logos/projectpics/download (4).png',
              '/logos/projectpics/download (5).png',
              '/logos/projectpics/download (6).png',
              '/logos/projectpics/download (8).png',
              '/logos/projectpics/download (2).jpg',
              '/logos/projectpics/download (3).jpg',
              '/logos/projectpics/download (4).jpg'
            ].map((logo, idx) => (
              <motion.div 
                key={`logo-1-${idx}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-xl transition-all duration-500 p-6 flex items-center justify-center border border-gray-100 group logo-card"
                style={{
                  boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.3)'
                }}
              >
                <img 
                  src={logo} 
                  alt={`Partner ${idx + 1}`}
                  className="max-w-full max-h-full object-contain transition-all duration-500 logo-image"
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              '/logos/projectpics/download.png',
              '/logos/projectpics/download (1).png',
              '/logos/projectpics/download (2).png',
              '/logos/projectpics/download (3).png',
              '/logos/projectpics/download (4).png',
              '/logos/projectpics/download (5).png',
              '/logos/projectpics/download (6).png',
              '/logos/projectpics/download (8).png',
              '/logos/projectpics/download (2).jpg',
              '/logos/projectpics/download (3).jpg',
              '/logos/projectpics/download (4).jpg'
            ].map((logo, idx) => (
              <motion.div 
                key={`logo-2-${idx}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-xl transition-all duration-500 p-6 flex items-center justify-center border border-gray-100 group logo-card"
                style={{
                  boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.3)'
                }}
              >
                <img 
                  src={logo} 
                  alt={`Partner ${idx + 1}`}
                  className="max-w-full max-h-full object-contain transition-all duration-500 logo-image"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Custom styles for center highlight effect */}
        <style jsx>{`
          @keyframes centerHighlight {
            0%, 100% { 
              filter: grayscale(70%);
              box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1);
            }
            50% { 
              filter: grayscale(0%);
              box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.4);
            }
          }
          
          .logo-card {
            animation: centerHighlight 6s ease-in-out infinite;
          }
          
          .logo-card:hover .logo-image {
            filter: grayscale(0%) !important;
          }
          
          .logo-card:hover {
            border-color: rgba(34, 197, 94, 0.3) !important;
            box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.3) !important;
          }
        `}</style>
      </section>

      {/* CTA Section with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-900/90 to-green-900/95"></div>
        
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to bring your vision to life with our comprehensive MEP engineering expertise.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-green-600 px-12 py-5 rounded-xl font-bold hover:bg-green-50 hover:shadow-2xl transition-all shadow-2xl text-xl transform hover:scale-105"
            >
              Contact Us Today
            </Link>
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
