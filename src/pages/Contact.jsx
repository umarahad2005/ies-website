import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  useEffect(()=>{
    document.title = 'IES - Contact'
    setMeta('Contact','Contact IES for services and inquiries')
  },[])
  
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''})

  function onSubmit(e){
    e.preventDefault();
    alert('Thank you for your message! This is a demo contact form. Configure a real endpoint to receive messages.')
  }

  const offices = [
    {
      city: 'Lahore',
      address: '18-J2, Johar Town, Lahore, Pakistan',
      phone: '+92-42-35461094',
      email: 'info@ies.com.pk',
      icon: '🏢'
    },
    {
      city: 'Islamabad',
      address: 'F-7 Markaz, Islamabad, Pakistan',
      phone: '+92-51-2222222',
      email: 'islamabad@ies.com.pk',
      icon: '🏛️'
    },
    {
      city: 'Karachi',
      address: 'Clifton, Karachi, Pakistan',
      phone: '+92-21-3333333',
      email: 'karachi@ies.com.pk',
      icon: '🌆'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20 -mt-12 pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start your project? We're here to help bring your vision to life with our comprehensive MEP engineering expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you soon</p>
              
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    value={form.name} 
                    onChange={e=>setForm({...form, name: e.target.value})} 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" 
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    type="email" 
                    value={form.email} 
                    onChange={e=>setForm({...form, email: e.target.value})} 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" 
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    value={form.subject} 
                    onChange={e=>setForm({...form, subject: e.target.value})} 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" 
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required 
                    value={form.message} 
                    onChange={e=>setForm({...form, message: e.target.value})} 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none" 
                    rows={5} 
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="text-4xl">📞</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700">+92-42-35461094</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="text-4xl">📧</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">info@ies.com.pk</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="text-4xl">📍</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                      <p className="text-gray-700">18-J2, Johar Town,<br/>Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Saturday</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-gray-600 text-lg">We have presence in major cities across Pakistan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{office.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">{office.address}</p>
                  <p className="font-semibold text-green-600">{office.phone}</p>
                  <p className="text-sm">{office.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl font-semibold">Map Integration</p>
              <p className="text-sm mt-2">Google Maps or custom map can be embedded here</p>
            </div>
          </div>
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
