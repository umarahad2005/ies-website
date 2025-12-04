import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ProfessionalAffiliations(){
  useEffect(()=>{ document.title='IES - Professional Affiliations'; setMeta('Professional Affiliations','Professional affiliations and memberships of IES') },[])
  
  const affiliations = [
    {
      abbr: 'PEC',
      name: 'Pakistan Engineering Council',
      link: 'https://pec.org.pk/',
      logo: '/logos/pec-logo.png'
    },
    {
      abbr: 'ASHRAE',
      name: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers, USA',
      link: 'https://www.ashrae.org/',
      logo: '/logos/ashrae-logo.png'
    },
    {
      abbr: 'IET',
      name: 'Institute of Engineering and Technology',
      link: 'https://www.theiet.org/',
      logo: '/logos/iet-logo.png'
    },
    {
      abbr: 'CIBSE',
      name: 'Chartered Institute of Building Services Engineers',
      link: 'https://www.cibse.org/',
      logo: '/logos/cibse-logo.png'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Affiliations</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our professional memberships and certifications
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Affiliations Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {affiliations.map((affiliation, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-2xl hover:border-transparent transition-all duration-500 bg-white border border-gray-200"
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
                <div className="flex items-center justify-center mb-6 h-20 bg-gray-50 rounded-lg p-4">
                  <img 
                    src={affiliation.logo} 
                    alt={`${affiliation.abbr} logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-3xl font-bold text-green-600 hidden">{affiliation.abbr}</div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${
                  idx % 2 === 0 ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-cyan-600'
                } bg-clip-text text-transparent`}>{affiliation.abbr}</h3>
                <p className="text-gray-700 mb-4">{affiliation.name}</p>
                {affiliation.link && (
                  <a 
                    href={affiliation.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${
                      idx % 2 === 0 ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'
                    } font-semibold text-sm transition-colors`}
                  >
                    Visit Website 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Professional Excellence
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Our affiliations ensure we deliver the highest quality engineering services.
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
