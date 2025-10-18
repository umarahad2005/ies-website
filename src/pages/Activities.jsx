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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20 -mt-12 pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Core Activities</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              12+ Specialized domains of MEP engineering excellence
            </p>
            <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="text-3xl">⚙️</div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Expertise in</div>
                <div className="font-bold">12+ Technical Domains</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${activity.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 cursor-pointer`}
              >
                <div className="text-6xl mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-700 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Capabilities</h2>
            
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
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-md"
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for Specialized MEP Solutions?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our multidisciplinary team is ready to tackle your most complex engineering challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
          >
            Discuss Your Project
          </a>
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
