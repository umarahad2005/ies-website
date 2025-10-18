import React, { useEffect, useState } from 'react'

export default function FAQ(){
  useEffect(()=>{ document.title='IES - FAQ'; setMeta('FAQ','Frequently asked questions') },[])
  
  const faqs = [
    {
      question: 'What services does IES provide?',
      answer: 'IES provides comprehensive MEP (Mechanical, Electrical & Plumbing) engineering consultancy services including HVAC design, energy efficiency, BIM, sustainability consulting, and more.'
    },
    {
      question: 'In which cities do you operate?',
      answer: 'IES has offices in major cities including Lahore and Islamabad, and we serve clients across Pakistan.'
    },
    {
      question: 'What types of projects do you handle?',
      answer: 'We handle projects across various sectors including commercial, institutional, healthcare, educational, residential, industrial, hospitality, and retail buildings.'
    },
    {
      question: 'How can I contact IES?',
      answer: 'You can reach us via phone at +92-42-35461094, email at info@ies.example, or visit our office at 18-J2, Johar Town, Lahore, Pakistan.'
    },
    {
      question: 'What design standards do you follow?',
      answer: 'We follow international standards including ASHRAE, CIBSE, ISO, NFPA, and other recognized engineering standards.'
    },
    {
      question: 'Do you provide energy audit services?',
      answer: 'Yes, we provide comprehensive energy audit and energy efficiency optimization services for existing and new buildings.'
    },
    {
      question: 'What is your experience in the industry?',
      answer: 'IES has 30+ years of combined experience with over 500 completed projects across various building types and sectors.'
    },
    {
      question: 'Do you offer sustainability consulting?',
      answer: 'Yes, we provide sustainability certification and consultancy services including LEED and other green building certifications.'
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <p className="text-gray-700 mb-8">Find answers to common questions about IES and our services</p>

      <div className="space-y-4 max-w-3xl">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-4 text-left font-semibold hover:bg-gray-50 flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className="text-green-600">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
        <p className="text-gray-700 mb-4">
          If you couldn't find the answer you're looking for, please don't hesitate to contact us directly.
        </p>
        <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Contact Us
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
