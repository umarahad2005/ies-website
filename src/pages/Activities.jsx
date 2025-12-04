import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Activities(){
  useEffect(()=>{
    document.title = 'IES - Activities'
    setMeta('Activities','Core activities and domains of service by IES')
  },[])
  
  const activities = [
    {
      title: 'HVAC System',
      description: 'Heating, Ventilation, & Air Conditioning systems design for optimal indoor comfort and energy efficiency.',
      icon: '❄️',
      color: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Refrigeration System',
      description: 'Complete refrigeration system design and cold-chain solutions for commercial and industrial applications.',
      icon: '🧊',
      color: 'from-emerald-50 to-teal-50'
    },
    {
      title: 'Plumbing System',
      description: 'Comprehensive plumbing system design including water supply, drainage, and sewage systems.',
      icon: '🚰',
      color: 'from-teal-50 to-green-50'
    },
    {
      title: 'Mechanical System / Process',
      description: 'Mechanical system and process engineering for industrial facilities and manufacturing plants.',
      icon: '⚙️',
      color: 'from-gray-50 to-slate-50'
    },
    {
      title: 'Building Information Modeling',
      description: 'Advanced BIM and Revit services for collaborative design and construction management.',
      icon: '🏗️',
      color: 'from-orange-50 to-amber-50'
    },
    {
      title: 'Fire Suppression System',
      description: 'Fire suppression and safety systems design to protect life and property.',
      icon: '🔥',
      color: 'from-red-50 to-orange-50'
    },
    {
      title: 'Electrical System',
      description: 'Complete electrical system design including power distribution, lighting, and emergency systems.',
      icon: '⚡',
      color: 'from-yellow-50 to-orange-50'
    },
    {
      title: 'Alternate Energy Systems',
      description: 'Renewable and alternate energy systems design for sustainable building solutions.',
      icon: '☀️',
      color: 'from-amber-50 to-yellow-50'
    },
    {
      title: 'Energy Audits',
      description: 'Comprehensive energy audits and efficiency optimization for existing buildings.',
      icon: '📊',
      color: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Vertical Transportation',
      description: 'Elevator, escalator, and vertical transportation systems design and consultation.',
      icon: '🛗',
      color: 'from-green-50 to-teal-50'
    },
    {
      title: 'Sustainability Certification',
      description: 'LEED and sustainability certification consultancy for green building projects.',
      icon: '🌱',
      color: 'from-lime-50 to-green-50'
    },
    {
      title: 'Smart Building Systems',
      description: 'Building automation and smart control systems for enhanced efficiency and comfort.',
      icon: '🤖',
      color: 'from-blue-50 to-cyan-50'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white py-20 -mt-12 pt-32 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
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
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Activities</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              12+ Specialized domains of MEP engineering excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
                style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: idx % 2 === 0 ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)' : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = idx % 2 === 0 
                    ? '0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.2)'
                    : '0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = idx % 2 === 0
                    ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)'
                    : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                }}
              >
                <div className="text-6xl mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">{activity.title}</h3>
                <p className="text-gray-700 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Capabilities
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Technical Expertise',
                  desc: 'Our team combines deep technical knowledge with practical experience across all MEP disciplines.',
                  icon: '🎓'
                },
                {
                  title: 'International Standards',
                  desc: 'We follow international codes and standards including ASHRAE, IBC, NFPA, and local regulations.',
                  icon: '🌍'
                },
                {
                  title: 'Integrated Design',
                  desc: 'Collaborative approach integrating all building systems for optimal performance and efficiency.',
                  icon: '🔗'
                },
                {
                  title: 'Innovation Focus',
                  desc: 'Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
                  icon: '💡'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-4 p-6 bg-white rounded-xl"
                  style={{ 
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    boxShadow: idx % 2 === 0 ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)' : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = idx % 2 === 0 
                      ? '0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.2)'
                      : '0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = idx % 2 === 0
                      ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)'
                      : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                  }}
                >
                  <div className="text-5xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            <h2 className="text-4xl font-bold mb-6">Looking for Specialized MEP Solutions?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Our multidisciplinary team is ready to tackle your most complex engineering challenges.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Discuss Your Project
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
