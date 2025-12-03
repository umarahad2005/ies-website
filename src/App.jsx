import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Activities = lazy(() => import('./pages/Activities'))
const Specialization = lazy(() => import('./pages/Specialization'))
const Products = lazy(() => import('./pages/Products'))
const Clients = lazy(() => import('./pages/Clients'))
const Projects = lazy(() => import('./pages/Projects'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const Careers = lazy(() => import('./pages/Careers'))
const FAQ = lazy(() => import('./pages/FAQ'))
const DesignStandards = lazy(() => import('./pages/DesignStandards'))
const ProfessionalAffiliations = lazy(() => import('./pages/ProfessionalAffiliations'))

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Suspense fallback={<div className="container py-24 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/activities" element={<PageWrapper><Activities /></PageWrapper>} />
            <Route path="/specialization" element={<PageWrapper><Specialization /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
            <Route path="/clients" element={<PageWrapper><Clients /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
            <Route path="/design-standards" element={<PageWrapper><DesignStandards /></PageWrapper>} />
            <Route path="/professional-affiliations" element={<PageWrapper><ProfessionalAffiliations /></PageWrapper>} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="container py-12"
    >
      {children}
    </motion.section>
  )
}
