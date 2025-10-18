import React, { useEffect } from 'react'

export default function ProfessionalAffiliations(){
  useEffect(()=>{ document.title='IES - Professional Affiliations'; setMeta('Professional Affiliations','Professional affiliations and memberships of IES') },[])
  
  const affiliations = [
    {
      abbr: 'PEC',
      name: 'Pakistan Engineering Council',
      link: 'https://pec.org.pk/',
      logo: '/logos/pec-logo.png'
    },
    {
      abbr: 'ASHRAE',
      name: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers, USA',
      link: 'https://www.ashrae.org/',
      logo: '/logos/ashrae-logo.png'
    },
    {
      abbr: 'IET',
      name: 'Institute of Engineering and Technology',
      link: 'https://www.theiet.org/',
      logo: '/logos/iet-logo.png'
    },
    {
      abbr: 'CIBSE',
      name: 'Chartered Institute of Building Services Engineers',
      link: 'https://www.cibse.org/',
      logo: '/logos/cibse-logo.png'
    }
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Professional Affiliations</h2>
      <p className="text-gray-700 mb-8">Our professional memberships and certifications</p>

      <div className="grid md:grid-cols-2 gap-8">
        {affiliations.map((affiliation, idx) => (
          <div key={idx} className="p-8 border-2 rounded-lg hover:border-green-500 transition bg-white shadow-sm hover:shadow-lg">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6 h-24 bg-gray-50 rounded-lg p-4">
              <img 
                src={affiliation.logo} 
                alt={`${affiliation.abbr} logo`}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="text-4xl font-bold text-green-600 hidden">{affiliation.abbr}</div>
            </div>
            
            <h3 className="text-2xl font-bold text-green-600 mb-3">{affiliation.abbr}</h3>
            <p className="text-gray-700 mb-4">{affiliation.name}</p>
            {affiliation.link && (
              <a 
                href={affiliation.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
              >
                Visit Website 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function setMeta(title,desc){
  let m = document.querySelector('meta[name="description"]')
  if(!m){ m = document.createElement('meta'); m.name='description'; document.head.appendChild(m)}
  m.content = desc
}
