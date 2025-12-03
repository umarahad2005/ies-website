import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [companyDropdown, setCompanyDropdown] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="IES logo" className="h-14 w-auto object-contain" loading="lazy" />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">IES</span>
            <span className="text-xs text-gray-500 hidden sm:block">Integrated & Efficient Solutions</span>
          </div>
        </Link>        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-1 items-center">
          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
              Company
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {companyDropdown && (
              <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden">
                <Link to="/about" className="block px-4 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 text-gray-700 hover:text-blue-600 transition-colors">About IES</Link>
                <Link to="/design-standards" className="block px-4 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 text-gray-700 hover:text-blue-600 transition-colors">Design Standards</Link>
                <Link to="/professional-affiliations" className="block px-4 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 text-gray-700 hover:text-blue-600 transition-colors">Professional Affiliations</Link>
              </div>
            )}
          </div>
          
          <NavLink to="/services" className={({isActive})=> isActive? 'px-4 py-2 text-blue-600 font-semibold' : 'px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors'}>Services</NavLink>
          <NavLink to="/activities" className={({isActive})=> isActive? 'px-4 py-2 text-blue-600 font-semibold' : 'px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors'}>Activities</NavLink>
          <NavLink to="/specialization" className={({isActive})=> isActive? 'px-4 py-2 text-blue-600 font-semibold' : 'px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors'}>Specialization</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive? 'px-4 py-2 text-blue-600 font-semibold' : 'px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors'}>Projects</NavLink>
          <NavLink to="/careers" className={({isActive})=> isActive? 'px-4 py-2 text-blue-600 font-semibold' : 'px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors'}>Career</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'px-4 py-2 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 text-white rounded' : 'px-4 py-2 bg-gray-800 text-white hover:bg-gradient-to-r hover:from-green-600 hover:via-blue-600 hover:to-green-600 rounded transition-all'}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t">
          <div className="container py-4 flex flex-col gap-1">
            <div className="font-semibold text-sm text-gray-500 px-4 py-2">COMPANY</div>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">About IES</NavLink>
            <NavLink to="/design-standards" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Design Standards</NavLink>
            <NavLink to="/professional-affiliations" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Professional Affiliations</NavLink>
            
            <div className="font-semibold text-sm text-gray-500 px-4 py-2 mt-2">MENU</div>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Services</NavLink>
            <NavLink to="/activities" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Activities</NavLink>
            <NavLink to="/specialization" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Specialization</NavLink>
            <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Projects</NavLink>
            <NavLink to="/careers" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Career</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-2 text-gray-700 hover:bg-gray-50">Contact</NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
