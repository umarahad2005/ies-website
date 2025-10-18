import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="IES Logo" className="h-12 w-12 rounded-lg" />
              <h3 className="font-bold text-2xl">IES</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Integrated & Efficient Solutions - Professional MEP Engineering Consultancy providing innovative, efficient, and sustainable solutions for 30+ years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <span className="text-xl">🔗</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <span className="text-xl">📧</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> About Us
              </Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Services
              </Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Activities
              </Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Projects
              </Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Training
              </Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/design-standards" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Design Standards
              </Link></li>
              <li><Link to="/professional-affiliations" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Affiliations
              </Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Products
              </Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> Careers
              </Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                <span>→</span> FAQ
              </Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div className="text-gray-400">
                  18-J2, Johar Town,<br />
                  Lahore, Pakistan
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+924235461094" className="text-gray-400 hover:text-white transition">
                  +92-42-35461094
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">�</span>
                <a href="mailto:info@ies.com.pk" className="text-gray-400 hover:text-white transition">
                  info@ies.com.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} <span className="font-semibold text-white">IES</span> · Integrated & Efficient Solutions · All rights reserved
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600"></div>
    </footer>
  )
}
