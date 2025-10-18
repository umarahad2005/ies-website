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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20 -mt-12 pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-green-300 border border-green-400/30"
            >
              ✨ Comprehensive MEP Solutions
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              From planning to optimization, we provide complete MEP engineering consultancy services for projects of all scales.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Get Started
              </Link>
              <Link 
                to="/projects" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition border border-white/20"
              >
                View Projects
              </Link>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Engineering Solutions
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
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized engineering services across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need MEP Engineering Expertise?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can bring value to your project.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg shadow-xl hover:shadow-2xl"
            >
              Request Consultation
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
