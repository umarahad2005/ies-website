import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Careers(){
  useEffect(()=>{ document.title='IES - Careers'; setMeta('Careers','Current job openings at IES') },[])
  
  const benefits = [
    { title: 'Competitive salary packages', icon: '💰' },
    { title: 'Professional development opportunities', icon: '📈' },
    { title: 'Training and certifications', icon: '🎓' },
    { title: 'Collaborative work environment', icon: '🤝' },
    { title: 'Career growth opportunities', icon: '🚀' },
    { title: 'Work on diverse projects', icon: '🏗️' }
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Matching Specialization Page */}
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
              Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">IES</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join our team of dedicated professionals and contribute to innovative MEP engineering solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Why Work With Us */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Work With Us?</h2>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-3xl">{benefit.icon}</span>
                    <span className="text-gray-700 leading-relaxed pt-1">{benefit.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Current Openings */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Current Openings</h2>
              <div className="text-center py-12">
                <motion.div 
                  className="text-7xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💼
                </motion.div>
                <p className="text-gray-700 font-medium mb-2 text-lg">No Current Openings</p>
                <p className="text-gray-600 text-sm">We're not hiring at the moment, but check back soon for future opportunities!</p>
              </div>
            </motion.div>
          </div>

          {/* Future Opportunities CTA */}
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-10 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Interested in Future Opportunities?</h3>
              <p className="text-gray-700 mb-6 text-lg">
                While we don't have any openings right now, we're always interested in connecting with talented professionals. Feel free to send your resume for future consideration:
              </p>
              <motion.a 
                href="mailto:careers@ies.com.pk" 
                className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Your Resume
              </motion.a>
            </div>
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
              Build Your Career With IES
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Be part of a team that's shaping the future of MEP engineering in Pakistan.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Contact Us
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
