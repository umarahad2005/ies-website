import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function About(){
  useEffect(()=>{
    document.title = 'IES - About Us'
    setMeta('About IES','Mission, vision, values and leadership of IES')
  },[])

  const leadership = [
    {
      name: 'Tahir Raza',
      position: 'CEO | Co-Founder | Principal Consultant',
      credentials: 'Past President, ASHRAE Central Pakistan Chapter | ARVC-MP ASHRAE Region-At-Large',
      image: '/logos/tahir.jpeg',
      bio: '18 Years of Professional Experience in HVAC Consulting',
      expertise: [
        'Leading Expert in HVACR System Design',
        'Graduated from UET Lahore',
        'Masters in Environmental Sciences',
        'Masters in Project Management',
        'Specializes in Indoor environmental and energy efficient design with sustainability'
      ],
      experience: [
        'Leading and guiding teams in Design of HVAC Systems',
        'Office Buildings, Health Care Facilities, Research Labs',
        'Data Centers, Clean Rooms, Auditoriums, Museums',
        'Industrial Plants and Installation Supervision'
      ],
      roles: [
        'Member BOG | ASHRAE Central Pakistan Chapter',
        'Committee Chair | ASHRAE Central Pakistan Chapter',
        'Trainer/Coach | Capacity Building and Leadership',
        'Speaker and Paper Presenter ASHRAE Conferences',
        'Member National Curriculum Review Committee | NAVTTEC'
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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div className='overflow-hidden'>
      <section className='relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white py-20 -mt-12 pt-32 overflow-hidden'>
        <motion.div
          className='absolute top-20 right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl'
          animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl'
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className='container relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto text-center'
          >
            <motion.h1
              className='text-5xl md:text-6xl font-bold mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300'>IES</span>
            </motion.h1>
            <motion.p
              className='text-xl text-gray-300 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Founded in 2010 | Transforming the Built Environment
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container'>
          {/* Who We Are */}
          <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Who We Are</h2>
              <p className='text-gray-700 text-lg mb-4 leading-relaxed'>
                IES, founded in 2010, IES Consulting is an engineering consultancy firm providing consultancy services in the field of HVAC&R, Mechanical, Electrical & Plumbing (MEP) – a building services engineering company having bases in Islamabad and Lahore.
              </p>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                The company focuses dedicatedly on HVAC systems design, energy efficiency, indoor air quality, refrigeration and sustainability within the industry. All these services include the efficient and cost-effective strategies to reduce carbon footprint.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                IES offers comprehensive engineering consultancy services for MEP Systems in all kinds of buildings including but not limited to commercial, institutional, health-care, educational, residential, industrial, hospitality, retail, and cultural market segments.
              </p>
            </motion.div>
            <motion.div 
              className='relative'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' 
                alt='Modern building' 
                className='rounded-2xl shadow-2xl'
              />
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div 
            className='grid md:grid-cols-3 gap-8 mb-16'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className='bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-transparent transition-all duration-500'
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                <svg className='w-8 h-8 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-3 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Mission</h3>
              <p className='text-gray-700 leading-relaxed'>To provide innovative, efficient, sustainable and cost-effective engineered solutions with the unique blend of integrity and transparency for the best interest of projects and clients.</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className='bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-transparent transition-all duration-500'
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <svg className='w-8 h-8 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                  <path fillRule='evenodd' d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clipRule='evenodd' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent'>Vision</h3>
              <p className='text-gray-700 leading-relaxed'>IES will be the leader in providing energy-efficient and cost-effective solution for the built environments.</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className='bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-transparent transition-all duration-500'
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                <svg className='w-8 h-8 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-3 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Values</h3>
              <div className='text-gray-700 leading-relaxed space-y-2'>
                <p><strong className='bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Innovation & Integrity:</strong> Committed to highest ethical standards with transparency</p>
                <p><strong className='bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent'>Efficiency & Excellence:</strong> Furnish efficient and cost-effective solutions with ethics</p>
                <p><strong className='bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Sustainability & Solutions:</strong> Passionate about sustainable and creative solutions</p>
                <p><strong className='bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent'>Collaboration & Optimization:</strong> Embraces collaborative efforts with timely delivery</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Our Approach */}
          <motion.div 
            className='bg-white rounded-2xl shadow-lg p-10 mb-16 border border-gray-200'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent'>Our Philosophy & Approach</h2>
            <div className='space-y-4 max-w-4xl mx-auto'>
              <p className='text-gray-700 text-lg leading-relaxed'>
                IES was founded with a commitment to quality design which we achieve by working closely with our clients, listening and mapping their needs and meeting the project parameters (particularly Cost, Time and Quality). IES Providing Energy-Efficient Solutions for Built Environments as Building Services Engineering Consultants.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                We adopt international best practices and apply the latest project and data management technologies, thus combining experience with innovation. Although the Firm offers specialized services, yet, it has a wide network of contractors and service providers which are teamed up to provide a complete solution for large projects according to differing nature of project requirements. This service delivery is done exclusively to represent the interests of clients.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                IES's aspiration for outstanding professionalism, diverse background in the building industry and services fields, and a commitment to deliver quality, brings to the firm's projects a formula for excellence, and provides to clients a "one window" solution to meet their needs.
              </p>
            </div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div 
            className='mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Leadership Team</h2>
            
            {leadership.length > 0 ? (
              <div className='max-w-5xl mx-auto'>
                {leadership.map((leader, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500'
                  >
                    <div className='grid md:grid-cols-3 gap-8 p-8'>
                      <div className='md:col-span-1'>
                        <div className='aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-blue-100 mb-4'>
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-2'>{leader.name}</h3>
                        <p className='text-green-600 font-semibold mb-2'>{leader.position}</p>
                        <p className='text-sm text-gray-600 mb-4'>{leader.credentials}</p>
                        <div className='bg-green-50 p-4 rounded-lg'>
                          <p className='text-green-800 font-semibold text-sm'>{leader.bio}</p>
                        </div>
                      </div>
                      
                      <div className='md:col-span-2 space-y-6'>
                        <div>
                          <h4 className='text-lg font-bold text-gray-900 mb-3 flex items-center gap-2'>
                            <span className='text-green-600'>🎓</span> Expertise & Education
                          </h4>
                          <ul className='space-y-2'>
                            {leader.expertise.map((item, i) => (
                              <li key={i} className='text-gray-700 flex items-start gap-2'>
                                <span className='text-green-500 mt-1'>✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className='text-lg font-bold text-gray-900 mb-3 flex items-center gap-2'>
                            <span className='text-blue-600'>💼</span> Professional Experience
                          </h4>
                          <ul className='space-y-2'>
                            {leader.experience.map((item, i) => (
                              <li key={i} className='text-gray-700 flex items-start gap-2'>
                                <span className='text-blue-500 mt-1'>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className='text-lg font-bold text-gray-900 mb-3 flex items-center gap-2'>
                            <span className='text-green-600'>🏆</span> Leadership Roles
                          </h4>
                          <ul className='space-y-2'>
                            {leader.roles.map((item, i) => (
                              <li key={i} className='text-gray-700 flex items-start gap-2'>
                                <span className='text-green-500 mt-1'>★</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-2xl'>
                <div className='text-6xl mb-4'>👥</div>
                <p className='text-gray-600 text-lg'>Leadership team information will be added soon.</p>
                <p className='text-gray-500 text-sm mt-2'>Stay tuned for updates!</p>
              </div>
            )}
          </motion.div>

          {/* Consultancy Services */}
          <motion.div 
            className='bg-white rounded-2xl shadow-lg p-8 border border-gray-200'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent'>Comprehensive Consultancy Services</h2>
            <p className='text-gray-600 text-center mb-8 max-w-3xl mx-auto'>
              A wide spectrum of consultancy services provided for MEP Systems in all types of buildings
            </p>
            <div className='grid md:grid-cols-2 gap-6'>
              {[
                'Studies, Reports, Investigations, Surveys & Evaluations',
                'Cost Estimates & Feasibility',
                'Detailed Designs, Drawings Documentation for Tender',
                'Specifications & Bill of Quantities',
                'Scrutiny & Analysis of Bids',
                'Supervision & Management of Construction or Contracts',
                'Quality Control, Testing & Commissioning',
                'Retainer Consultancy'
              ].map((service, idx) => (
                <motion.div 
                  key={idx} 
                  className='flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 transition-colors duration-300'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <div className='w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-700 leading-relaxed font-medium'>{service}</span>
                </motion.div>
              ))}
            </div>
            
            <div className='mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200'>
              <h3 className='text-xl font-bold mb-3 text-center bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>Our Professional Recognition</h3>
              <p className='text-gray-700 text-center leading-relaxed'>
                IES is recognized for integrity of designs, conformance to relevant & applicable standards, adoption of innovative energy efficient & "green" solutions based on life-cycle costing, high quality & timely construction by adequate supervision, and preparation of complete operations & maintenance manuals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 text-white relative overflow-hidden'>
        <motion.div
          className='absolute inset-0 opacity-20'
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
        
        <div className='container relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-3xl mx-auto'
          >
            <h2 className='text-4xl font-bold mb-6'>
              Ready to Work Together?
            </h2>
            <p className='text-xl mb-8 text-gray-100'>
              Contact us today to learn how our expertise can benefit your project.
            </p>
            <motion.a
              href='/contact'
              className='inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function setMeta(title,desc){
  let m = document.querySelector('meta[name=\"description\"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
