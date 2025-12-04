import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Services(){
  useEffect(()=>{ 
    document.title='IES - Services'
    setMeta('Services','Comprehensive MEP engineering services from planning to optimization') 
  },[])

  const services = [
    {
      title: 'Planning & Preparation',
      subtitle: 'From Training to Services',
      description: 'Definition of Client\'s Need and Client\'s Priorities. Project planning and feasibilities evaluation.',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      color: 'from-green-600 to-emerald-600',
      details: [
        'Client needs assessment',
        'Project feasibility studies',
        'Priority definition',
        'Budget planning',
        'Timeline development'
      ]
    },
    {
      title: 'Design / Pre-Construction',
      subtitle: 'Engineering Excellence',
      description: 'Design and Tender Documentation, BOQ, Final Estimates.',
      icon: '📐',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      color: 'from-blue-600 to-cyan-600',
      details: [
        'Detailed engineering design',
        'Tender documentation',
        'Bill of Quantities (BOQ)',
        'Cost estimates',
        'Technical specifications'
      ]
    },
    {
      title: 'Supervision',
      subtitle: 'Quality Assurance',
      description: 'Supervision, Contract Administration, Project Management.',
      icon: '👷',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      color: 'from-green-600 to-teal-600',
      details: [
        'On-site supervision',
        'Contract administration',
        'Project management',
        'Quality control',
        'Progress monitoring'
      ]
    },
    {
      title: 'Operation / Optimization',
      subtitle: 'Efficiency & Performance',
      description: 'Retainer Consultancy, Energy efficiency, Energy Audit.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      color: 'from-blue-600 to-indigo-600',
      details: [
        'Retainer consultancy services',
        'Energy efficiency optimization',
        'Energy audits',
        'Performance monitoring',
        'System optimization'
      ]
    },
    {
      title: 'Value Added Services',
      subtitle: 'Beyond Engineering',
      description: 'Sustainability Consultancy, Value Engineering, Design Review.',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: 'from-green-600 to-emerald-600',
      details: [
        'Sustainability consultancy',
        'Value engineering',
        'Design review & optimization',
        'LEED certification support',
        'Green building consulting'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From planning to optimization, we provide complete MEP engineering consultancy services for projects of all scales
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-green-600">Complete Engineering Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end MEP engineering services from initial planning to post-construction optimization
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl group"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>
                      {service.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className={`inline-block px-4 py-1 bg-gradient-to-r ${service.color} text-white text-sm font-semibold rounded-full mb-4`}>
                    {service.subtitle}
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-green-600">Our Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized engineering services across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '🏗️', title: 'HVAC Systems', desc: 'Complete heating, ventilation, and air conditioning design' },
              { icon: '💡', title: 'Electrical Design', desc: 'Power distribution and lighting systems engineering' },
              { icon: '💧', title: 'Plumbing Systems', desc: 'Water supply, drainage, and fire protection' },
              { icon: '🔥', title: 'Fire Safety', desc: 'Fire detection and suppression systems' },
              { icon: '🌱', title: 'Sustainability', desc: 'Green building and LEED certification' },
              { icon: '📊', title: 'BIM Services', desc: 'Building Information Modeling and coordination' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
              >
                {/* Gradient Header */}
                <div className={`relative h-32 bg-gradient-to-br ${idx % 2 === 0 ? 'from-green-50 to-emerald-50' : 'from-blue-50 to-cyan-50'} flex items-center justify-center`}>
                  <div className="text-6xl drop-shadow-lg">{item.icon}</div>
                </div>
                
                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${idx % 2 === 0 ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-cyan-600'} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Need MEP Engineering Expertise?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how our comprehensive services can bring value to your project.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Request Consultation
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
