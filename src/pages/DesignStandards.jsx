import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function DesignStandards(){
  useEffect(()=>{ document.title='IES - Design Standards'; setMeta('Design Standards','International design standards followed by IES') },[])
  
  const standards = [
    {
      name: 'ASHRAE',
      full: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers, USA',
      logo: '/logos/ashrae-logo.png',
      link: 'https://www.ashrae.org/'
    },
    {
      name: 'CIBSE',
      full: 'Chartered Institute of Building Services Engineers (CIBSE)',
      logo: '/logos/cibse-logo.png',
      link: 'https://www.cibse.org/'
    },
    {
      name: 'CDC',
      full: 'Center for Disease Control & Prevention, USA (CDC)',
      logo: '/logos/cdc-logo.png',
      link: 'https://www.cdc.gov/'
    },
    {
      name: 'FGI',
      full: 'Facilities Guideline Institute, USA (FGI)',
      logo: '/logos/fgi-logo.png',
      link: 'https://fgiguidelines.org/'
    },
    {
      name: 'ISO',
      full: 'International Standard Organization, USA',
      logo: '/logos/iso-logo.png',
      link: 'https://www.iso.org/'
    },
    {
      name: 'NFPA',
      full: 'National Fire Protection Authority, USA',
      logo: '/logos/nfpa-logo.png',
      link: 'https://www.nfpa.org/'
    }
  ]

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

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Matching Specialization Page */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white py-20 -mt-12 pt-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
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
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Standards</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              IES adheres to international best practices and design standards
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Standards Grid - Optimized for single viewport */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {standards.map((standard, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 border rounded-2xl transition-all duration-500 bg-white group"
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
                {/* Logo */}
                <div className="flex items-center justify-center mb-3 h-16 bg-gray-50 rounded-lg p-2">
                  <img 
                    src={standard.logo} 
                    alt={`${standard.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-2xl font-bold text-green-600 hidden">{standard.name}</div>
                </div>
                
                <h3 className={`text-lg font-bold mb-2 ${
                  idx % 2 === 0 ? 'text-green-600' : 'text-blue-600'
                }`}>{standard.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{standard.full}</p>
                
                {standard.link && (
                  <a 
                    href={standard.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${
                      idx % 2 === 0 ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'
                    } font-semibold text-xs transition-colors`}
                  >
                    Visit Website 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
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
              Excellence Through Standards
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Our commitment to international standards ensures quality and reliability in every project.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
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

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
