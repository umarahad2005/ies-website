import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Specialization() {
  useEffect(() => {
    document.title = 'IES - Our Specialization'
    setMeta('Our Specialization', 'Energy modeling services tailored for residential buildings and associated facilities')
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const specializations = [
    {
      title: 'Apartment Buildings',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      description: 'Energy modeling for multi-story residential apartment complexes with optimized HVAC systems.'
    },
    {
      title: 'Townhomes',
      icon: '🏘️',
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80',
      description: 'Sustainable energy solutions for modern townhouse developments and communities.'
    },
    {
      title: 'Complexes',
      icon: '🏙️',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description: 'Comprehensive energy analysis for large residential and mixed-use complexes.'
    },
    {
      title: 'Office Spaces',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description: 'Energy-efficient MEP design for commercial office buildings and workspaces.'
    },
    {
      title: 'Gyms',
      icon: '🏋️',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      description: 'Specialized HVAC and ventilation systems for fitness centers and gyms.'
    },
    {
      title: 'Indoor Pools',
      icon: '🏊',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
      description: 'Advanced climate control and dehumidification for indoor pool facilities.'
    },
    {
      title: 'Shared Lobbies',
      icon: '🚪',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      description: 'Energy-efficient lighting and HVAC for common areas and building lobbies.'
    },
    {
      title: 'Other Amenity Buildings',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Comprehensive MEP solutions for recreational facilities and amenity spaces.'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-green-900 text-white py-20 -mt-12 pt-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Specialization</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our Energy Modeling services are tailored for residential buildings and a variety of associated facilities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {specializations.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent transition-all duration-500"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = idx % 2 === 0 
                    ? '0 20px 40px rgba(34, 197, 94, 0.3)' 
                    : '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    idx % 2 === 0 
                      ? 'from-green-900/80 to-transparent' 
                      : 'from-blue-900/80 to-transparent'
                  }`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className={`text-5xl ${
                      idx % 2 === 0 
                        ? 'bg-green-500/20 border-green-400/50' 
                        : 'bg-blue-500/20 border-blue-400/50'
                    } backdrop-blur-sm border-2 rounded-2xl p-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${
                    idx % 2 === 0 ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                  style={{
                    background: idx % 2 === 0
                      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%)'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)'
                  }}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Building's Energy?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us today to learn how our specialized energy modeling services can benefit your project.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function setMeta(title, desc) {
  let m = document.querySelector('meta[name="description"]')
  if (!m) {
    m = document.createElement('meta')
    m.name = 'description'
    document.head.appendChild(m)
  }
  m.content = desc
}
