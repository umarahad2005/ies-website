import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function About(){
  useEffect(()=>{
    document.title = 'IES - About Us'
    setMeta('About IES','Mission, vision, values and leadership of IES')
  },[])

  // Leadership data - to be added later with real team information
  const leadership = [
    // Add your leadership team members here
    // Example format:
    // {
    //   name: 'Full Name',
    //   position: 'Job Title',
    //   credentials: 'Qualifications',
    //   image: 'image-url',
    //   bio: 'Brief bio'
    // }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 py-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About IES</h1>
          <p className="text-xl text-gray-300">Leading MEP Engineering Consultancy in Pakistan</p>
        </motion.div>
      </div>

      {/* Company Overview */}
      <div className="prose max-w-none mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              IES is an engineering consultancy firm providing consultancy services in the field of HVAC & R, Mechanical, Electrical & Plumbing (MEP) – a building services engineering company having bases in major cities across Pakistan.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The company focuses on HVAC systems design, energy efficiency, indoor air quality, refrigeration, and sustainability within the industry. All these services include efficient and cost-effective strategies to reduce carbon footprint.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
              alt="Modern building" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
          <p className="text-gray-700 leading-relaxed">To provide innovative, efficient, sustainable, and cost-effective engineered solutions.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-600"
        >
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
          <p className="text-gray-700 leading-relaxed">IES will be the leader in providing energy-efficient and cost-effective solutions for engineering projects.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-600"
        >
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Values</h3>
          <p className="text-gray-700 leading-relaxed">We take personal responsibility to deliver on our promises to our customers, suppliers and stakeholders.</p>
        </motion.div>
      </div>

      {/* Our Approach */}
      <div className="bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 py-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              IES was founded with a commitment to quality design which we achieve by working closely with our clients, listening, and mapping their needs and meeting the project parameters (particularly Cost, Time and Quality). IES provides Energy-Efficient Solutions for Built Environments as Building Services Engineering Consultants.
            </p>
            <p className="text-gray-700 leading-relaxed">
              IES adopts international best practices and applies the latest project and data management technologies, thus combining experience with innovation. Although the firm offers specialized services, it has a wide network of contractors and service providers who are teamed up to provide a complete solution for large projects according to different nature of project requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
        
        {leadership.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{leader.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{leader.credentials}</p>
                  <p className="text-gray-700 text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="text-6xl mb-4">👥</div>
            <p className="text-gray-600 text-lg">Leadership team information will be added soon.</p>
            <p className="text-gray-500 text-sm mt-2">Stay tuned for updates!</p>
          </div>
        )}
      </div>

      {/* Consultancy Services */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Consultancy Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Studies, Reports, Investigations, Surveys & Evaluations',
            'Cost Estimates & Feasibility',
            'Detailed Designs, Drawings Documentation for Tender, Specifications, Bill of Quantities',
            'Scrutiny & Analysis of Bids',
            'Supervision & Management of Construction or Contracts',
            'Quality Control, Testing & Commissioning'
          ].map((service, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 leading-relaxed">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
