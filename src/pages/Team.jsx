import React, { useEffect } from 'react'

export default function Team(){
  useEffect(()=>{ document.title='IES - Team'; setMeta('Team','Profiles of the IES team') },[])
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <p className="text-gray-700 mb-8">
        Our team consists of highly qualified engineers and technical professionals with extensive experience in MEP design and consultancy.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Leadership Team</h3>
          <p className="text-sm text-gray-600">Experienced leadership guiding our vision and projects</p>
        </div>
        
        <div className="border rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👥</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Engineering Team</h3>
          <p className="text-sm text-gray-600">Skilled engineers with 30+ years of combined experience</p>
        </div>
        
        <div className="border rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">🔧</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Technical Staff</h3>
          <p className="text-sm text-gray-600">Dedicated technical professionals ensuring quality delivery</p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
        <p className="text-gray-700 mb-4">
          We're always looking for talented professionals to join our growing team. 
          Check out our <a href="/careers" className="text-green-600 hover:underline">careers page</a> for current openings.
        </p>
      </div>
    </div>
  )
}

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
