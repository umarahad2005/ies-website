import React, { useEffect } from 'react'

export default function Careers(){
  useEffect(()=>{ document.title='IES - Careers'; setMeta('Careers','Current job openings at IES') },[])
  
  const benefits = [
    'Competitive salary packages',
    'Professional development opportunities',
    'Training and certifications',
    'Collaborative work environment',
    'Career growth opportunities',
    'Work on diverse projects'
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Careers at IES</h2>
      <p className="text-gray-700 mb-8">
        Join our team of dedicated professionals and contribute to innovative MEP engineering solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
          <div className="text-center py-8">
            <div className="text-5xl mb-4">💼</div>
            <p className="text-gray-700 font-medium mb-2">No Current Openings</p>
            <p className="text-gray-600 text-sm">We're not hiring at the moment, but check back soon for future opportunities!</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Interested in Future Opportunities?</h3>
        <p className="text-gray-700 mb-4">
          While we don't have any openings right now, we're always interested in connecting with talented professionals. Feel free to send your resume for future consideration:
        </p>
        <a href="mailto:careers@ies.com.pk" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
          Submit Your Resume
        </a>
      </div>
    </div>
  )
}

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
