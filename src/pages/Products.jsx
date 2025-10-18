import React, { useEffect } from 'react'

export default function Products(){
  useEffect(()=>{ document.title='IES - Products'; setMeta('Products','Products and solutions offered by IES') },[])
  
  const productCategories = [
    {
      title: 'HVAC Solutions',
      items: ['Chiller Systems', 'Air Handling Units', 'VRF Systems', 'Ductwork Solutions']
    },
    {
      title: 'Energy Solutions',
      items: ['Solar PV Systems', 'Energy Management Systems', 'Building Automation', 'Smart Controls']
    },
    {
      title: 'Plumbing Products',
      items: ['Water Treatment Systems', 'Pumping Solutions', 'Drainage Systems', 'Fire Protection']
    },
    {
      title: 'Electrical Products',
      items: ['Power Distribution', 'Lighting Solutions', 'UPS Systems', 'Emergency Power']
    }
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Products & Solutions</h2>
      <p className="text-gray-700 mb-8">
        Comprehensive MEP products and solutions for all building types
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {productCategories.map((category, idx) => (
          <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-600">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
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
