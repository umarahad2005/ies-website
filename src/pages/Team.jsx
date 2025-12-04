import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Team(){
  useEffect(()=>{ document.title='IES - Team'; setMeta('Team','Profiles of the IES team') },[])
  
  const teamCategories = [
    {
      icon: '👤',
      title: 'Leadership Team',
      description: 'Experienced leadership guiding our vision and strategic direction',
      color: 'green'
    },
    {
      icon: '👥',
      title: 'Engineering Team',
      description: 'Skilled engineers with 30+ years of combined MEP expertise',
      color: 'blue'
    },
    {
      icon: '🔧',
      title: 'Technical Staff',
      description: 'Dedicated technical professionals ensuring quality delivery',
      color: 'green'
    },
    {
      icon: '📐',
      title: 'Design Specialists',
      description: 'BIM and CAD specialists creating detailed engineering designs',
      color: 'blue'
    },
    {
      icon: '💼',
      title: 'Project Managers',
      description: 'Managing complex projects from conception to completion',
      color: 'green'
    },
    {
      icon: '🎓',
      title: 'Consultants',
      description: 'Expert consultants providing specialized technical guidance',
      color: 'blue'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Team</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Highly qualified engineers and technical professionals with extensive experience in MEP design and consultancy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Categories */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {teamCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
              >
                {/* Gradient Header */}
                <div className={`relative h-40 bg-gradient-to-br ${category.color === 'green' ? 'from-green-50 to-emerald-50' : 'from-blue-50 to-cyan-50'} flex items-center justify-center`}>
                  <div className="text-7xl drop-shadow-lg">{category.icon}</div>
                </div>
                
                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${category.color === 'green' ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-cyan-600'} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{category.description}</p>
                </div>
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
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 text-gray-100">
              We're always looking for talented professionals to join our growing team. Explore career opportunities with IES.
            </p>
            <motion.a
              href="/careers"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Careers
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
