import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Clients(){
  useEffect(()=>{ document.title='IES - Clients'; setMeta('Clients','Our clients and partners') },[])
  
  const clientCategories = [
    {
      category: 'Commercial',
      description: 'Office buildings, shopping centers, and commercial complexes',
      icon: '🏢',
      color: 'green'
    },
    {
      category: 'Institutional',
      description: 'Government buildings and public sector projects',
      icon: '🏛️',
      color: 'blue'
    },
    {
      category: 'Healthcare',
      description: 'Hospitals, clinics, and medical facilities',
      icon: '🏥',
      color: 'green'
    },
    {
      category: 'Educational',
      description: 'Schools, universities, and training centers',
      icon: '🎓',
      color: 'blue'
    },
    {
      category: 'Residential',
      description: 'Apartment buildings and housing complexes',
      icon: '🏘️',
      color: 'green'
    },
    {
      category: 'Industrial',
      description: 'Manufacturing facilities and industrial plants',
      icon: '🏭',
      color: 'blue'
    },
    {
      category: 'Hospitality',
      description: 'Hotels, resorts, and hospitality projects',
      icon: '🏨',
      color: 'green'
    },
    {
      category: 'Retail',
      description: 'Shopping malls and retail outlets',
      icon: '🛍️',
      color: 'blue'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-green-900 text-white py-20 -mt-12 pt-32 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Clients</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We serve diverse market segments with comprehensive MEP engineering solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clientCategories.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
                style={{ 
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  boxShadow: item.color === 'green' 
                    ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)' 
                    : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = item.color === 'green'
                    ? '0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.2)' 
                    : '0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = item.color === 'green'
                    ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)'
                    : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className={`text-2xl font-bold mb-3 ${
                  item.color === 'green' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {item.category}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 p-10 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 rounded-2xl border-2 border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Market Segments
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              IES offers comprehensive engineering consultancy services for MEP Systems in all kinds of buildings, including but not limited to commercial, institutional, healthcare, educational, residential, industrial, hospitality, retail, and cultural market segments.
            </p>
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
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Become Our Client</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join our prestigious list of satisfied clients across various industries. Let's build excellence together.
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
