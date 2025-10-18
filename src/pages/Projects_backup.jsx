import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Projects(){
  useEffect(()=>{ document.title='IES - Projects'; setMeta('Projects','Key projects delivered by IES') },[])
  
  const projects = [
    {
      name: 'Mall of B-17, Islamabad',
      duration: '2021',
      area: '600,000 Sq.ft',
      description: 'Commercial Mall',
      location: 'Islamabad, Pakistan',
      image: 'https://images.unsplash.com/photo-1519690889869-bde0a6a86224?w=800&q=80',
      scope: ['Detailed MEP design & Construction Supervision of commercial mall'],
      categories: ['HVAC System', 'Fire Protection', 'Electrical', 'Plumbing']
    },
    {
      name: 'Pelican Mall & Hotel',
      duration: '2021-2022',
      area: '560,000 Sq.ft',
      description: 'Commercial Mall & Hotel Complex',
      location: 'DHA Bahawalpur',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
      scope: ['Detailed Mechanical design & Construction Supervision'],
      categories: ['HVAC System', 'Fire Protection']
    },
    {
      name: 'Mall of Multan',
      duration: '2017',
      area: '180,000 Sq.ft',
      description: 'Shopping Mall',
      location: 'Multan, Pakistan',
      image: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&q=80',
      scope: ['Detailed MEP design & Construction Supervision'],
      categories: ['HVAC System', 'Fire Protection']
    },
    {
      name: 'Commercial Tower',
      duration: '2010',
      area: '360,000 Sq.ft',
      description: 'Multi-Story Commercial Building',
      location: '29-Kashmir Road, Rawalpindi',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      scope: ['12 floors & 3 basements', 'Retail and office spaces', 'Food court on 8th floor'],
      categories: ['HVAC System', 'Fire Protection', 'Electrical']
    },
    {
      name: 'Haier Head Office',
      duration: '2017',
      area: 'Corporate Campus',
      description: 'Corporate Head Office',
      location: 'Pakistan',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      scope: ['Project Management', 'HVAC System', 'Fire Protection', 'Complete Electrification', 'Outdoor Lighting Design'],
      categories: ['HVAC', 'Fire Protection', 'Electrical']
    },
    {
      name: 'ABB Tower',
      duration: '2019',
      area: '190,000 Sq.ft',
      description: 'Residential Apartment Building',
      location: 'Pakistan',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      scope: ['08-Storey Apartment Building', 'HVAC System Design', 'Supervision of HVAC'],
      categories: ['HVAC System', 'Supervision']
    }
  ]

  return (
    <div className="bg-gray-50 -mt-12 pt-12 pb-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-300">Excellence in MEP Engineering Across Pakistan</p>
            <div className="flex gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl">500+</div>
                <span>Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl">30+</div>
                <span>Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">{project.name}</h3>
                  <p className="text-gray-200 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((cat, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold text-gray-900">{project.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Area</span>
                    <span className="font-semibold text-gray-900">{project.area}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Type</span>
                    <span className="font-semibold text-gray-900">{project.description}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Scope of Work</h4>
                  <ul className="space-y-1">
                    {project.scope.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our comprehensive MEP engineering solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
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

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
