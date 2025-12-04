import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ(){
  useEffect(()=>{ document.title='IES - FAQ'; setMeta('FAQ','Frequently asked questions') },[])
  
  const faqs = [
    {
      question: 'What services does IES provide?',
      answer: 'IES provides comprehensive MEP (Mechanical, Electrical & Plumbing) engineering consultancy services including HVAC design, energy efficiency, BIM, sustainability consulting, and more.'
    },
    {
      question: 'In which cities do you operate?',
      answer: 'IES has offices in major cities including Lahore and Islamabad, and we serve clients across Pakistan.'
    },
    {
      question: 'What types of projects do you handle?',
      answer: 'We handle projects across various sectors including commercial, institutional, healthcare, educational, residential, industrial, hospitality, and retail buildings.'
    },
    {
      question: 'How can I contact IES?',
      answer: 'You can reach us via phone at +92-42-35461094, email at info@ies.example, or visit our office at 18-J2, Johar Town, Lahore, Pakistan.'
    },
    {
      question: 'What design standards do you follow?',
      answer: 'We follow international standards including ASHRAE, CIBSE, ISO, NFPA, and other recognized engineering standards.'
    },
    {
      question: 'Do you provide energy audit services?',
      answer: 'Yes, we provide comprehensive energy audit and energy efficiency optimization services for existing and new buildings.'
    },
    {
      question: 'What is your experience in the industry?',
      answer: 'IES has 30+ years of combined experience with over 500 completed projects across various building types and sectors.'
    },
    {
      question: 'Do you offer sustainability consulting?',
      answer: 'Yes, we provide sustainability certification and consultancy services including LEED and other green building certifications.'
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

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
        duration: 0.5
      }
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Questions</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Find answers to common questions about IES and our services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="space-y-4 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="border-2 rounded-xl overflow-hidden bg-white"
                style={{
                  borderColor: idx % 2 === 0 ? '#22c55e20' : '#3b82f620',
                  boxShadow: idx % 2 === 0 
                    ? '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)' 
                    : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                }}
                whileHover={{
                  borderColor: idx % 2 === 0 ? '#22c55e60' : '#3b82f660',
                  boxShadow: idx % 2 === 0 
                    ? '0 10px 20px -5px rgba(34, 197, 94, 0.3)' 
                    : '0 10px 20px -5px rgba(59, 130, 246, 0.3)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-lg hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.span 
                    className={`text-2xl font-bold ${idx % 2 === 0 ? 'text-green-600' : 'text-blue-600'}`}
                    animate={{ rotate: openIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === idx ? '−' : '+'}
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-gray-50 border-t-2" style={{ borderColor: idx % 2 === 0 ? '#22c55e20' : '#3b82f620' }}>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 p-10 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 rounded-2xl border-2 border-green-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              If you couldn't find the answer you're looking for, please don't hesitate to contact us directly. Our team is ready to assist you.
            </p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
              Contact Us
            </a>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss your project requirements and explore how IES can help you achieve your goals.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Contact Us Today
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
