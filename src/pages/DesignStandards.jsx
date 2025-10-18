import React, { useEffect } from 'react'

export default function DesignStandards(){
  useEffect(()=>{ document.title='IES - Design Standards'; setMeta('Design Standards','International design standards followed by IES') },[])
  
  const standards = [
    {
      name: 'ASHRAE',
      full: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers, USA',
      logo: '/logos/ashrae-logo.png',
      link: 'https://www.ashrae.org/'
    },
    {
      name: 'CIBSE',
      full: 'Chartered Institute of Building Services Engineers (CIBSE)',
      logo: '/logos/cibse-logo.png',
      link: 'https://www.cibse.org/'
    },
    {
      name: 'CDC',
      full: 'Center for Disease Control & Prevention, USA (CDC)',
      logo: '/logos/cdc-logo.png',
      link: 'https://www.cdc.gov/'
    },
    {
      name: 'FGI',
      full: 'Facilities Guideline Institute, USA (FGI)',
      logo: '/logos/fgi-logo.png',
      link: 'https://fgiguidelines.org/'
    },
    {
      name: 'ISO',
      full: 'International Standard Organization, USA',
      logo: '/logos/iso-logo.png',
      link: 'https://www.iso.org/'
    },
    {
      name: 'NFPA',
      full: 'National Fire Protection Authority, USA',
      logo: '/logos/nfpa-logo.png',
      link: 'https://www.nfpa.org/'
    }
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Design Standards</h2>
      <p className="text-gray-700 mb-8">IES adheres to international best practices and design standards</p>

      <div className="grid md:grid-cols-2 gap-6">
        {standards.map((standard, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition bg-white group">
            {/* Logo */}
            <div className="flex items-center justify-center mb-4 h-20 bg-gray-50 rounded-lg p-3">
              <img 
                src={standard.logo} 
                alt={`${standard.name} logo`}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="text-3xl font-bold text-green-600 hidden">{standard.name}</div>
            </div>
            
            <h3 className="text-xl font-bold text-green-600 mb-2">{standard.name}</h3>
            <p className="text-gray-600 mb-4">{standard.full}</p>
            
            {standard.link && (
              <a 
                href={standard.link} 
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
