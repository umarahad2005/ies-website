import React, { useEffect } from 'react'

export default function Clients(){
  useEffect(()=>{ document.title='IES - Clients'; setMeta('Clients','Our clients and partners') },[])
  
  const clientCategories = [
    {
      category: 'Commercial',
      description: 'Office buildings, shopping centers, and commercial complexes'
    },
    {
      category: 'Institutional',
      description: 'Government buildings and public sector projects'
    },
    {
      category: 'Healthcare',
      description: 'Hospitals, clinics, and medical facilities'
    },
    {
      category: 'Educational',
      description: 'Schools, universities, and training centers'
    },
    {
      category: 'Residential',
      description: 'Apartment buildings and housing complexes'
    },
    {
      category: 'Industrial',
      description: 'Manufacturing facilities and industrial plants'
    },
    {
      category: 'Hospitality',
      description: 'Hotels, resorts, and hospitality projects'
    },
    {
      category: 'Retail',
      description: 'Shopping malls and retail outlets'
    }
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
      <p className="text-gray-700 mb-8">
        We serve diverse market segments with comprehensive MEP engineering solutions
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientCategories.map((item, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-600 mb-2">{item.category}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Market Segments</h3>
        <p className="text-gray-700">
          IES offers comprehensive engineering consultancy services for MEP Systems in all kinds of buildings, including but not limited to commercial, institutional, healthcare, educational, residential, industrial, hospitality, retail, and cultural market segments.
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
