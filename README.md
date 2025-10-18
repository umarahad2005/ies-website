# IES Static Website (Vite + React)

This repository contains a modern, mobile-responsive static React website for **IES (Integrated Environmental Solutions)** - a professional MEP (Mechanical, Electrical & Plumbing) engineering consultancy firm.

## Features

✅ **React 18** with Vite for fast development  
✅ **Tailwind CSS** for modern, responsive styling  
✅ **Framer Motion** for smooth animations and transitions  
✅ **React Router** for client-side routing  
✅ **SEO optimized** with meta tags and descriptions  
✅ **Mobile responsive** design  
✅ **All content adapted from CDC.com.pk** and rebranded for IES

## Pages Included

- **Home** - Hero section, stats, mission/vision/values, company overview
- **About** - Company information, consultancy services
- **Services** - MEP engineering services (Planning, Design, Supervision, Optimization)
- **Activities** - 12+ domains of service (HVAC, BIM, Energy, Fire Protection, etc.)
- **Projects** - Completed projects showcase (500+ projects)
- **Products** - MEP products and solutions
- **Clients** - Client categories and market segments
- **Team** - Team overview
- **Contact** - Contact form and information
- **Careers** - Job openings and benefits
- **FAQ** - Frequently asked questions
- **Design Standards** - International standards (ASHRAE, CIBSE, ISO, NFPA)
- **Professional Affiliations** - PEC, ASHRAE, IET, CIBSE memberships

## Quick Start

### Install Dependencies

```powershell
cd "e:\ies website"
npm install
```

### Run Development Server

```powershell
npm run dev
```

Open your browser to the URL shown (typically `http://localhost:5173`)

### Build for Production

```powershell
npm run build
```

### Preview Production Build

```powershell
npm run preview
```

## Project Structure

```
ies-website/
├── public/
│   └── logo.jpg           # IES logo
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Sticky header with navigation
│   │   ├── Footer.jsx     # Footer with links
│   │   └── HeroSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Activities.jsx
│   │   ├── Products.jsx
│   │   ├── Clients.jsx
│   │   ├── Projects.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Careers.jsx
│   │   ├── FAQ.jsx
│   │   ├── DesignStandards.jsx
│   │   └── ProfessionalAffiliations.jsx
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind imports
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── postcss.config.cjs
```

## Content Source

All content has been **fetched from CDC.com.pk** and adapted for IES:
- Company information and descriptions
- Services and activities
- Project examples
- Contact information
- Professional affiliations
- Design standards

**Note:** CDC branding replaced with IES throughout the site. News/Blog section excluded as per requirements.

## Deployment

This is a static site and can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

```powershell
npm install -g vercel
vercel
```

### Deploy to Netlify

```powershell
npm run build
# Upload the 'dist' folder to Netlify
```

## Customization

- **Logo:** Replace `public/logo.jpg` with your logo
- **Contact Info:** Update contact details in `src/pages/Contact.jsx`
- **Colors:** Modify Tailwind theme in `tailwind.config.cjs`
- **Content:** Edit individual page files in `src/pages/`

## Technologies

- React 18.2.0
- Vite 5.1.0
- React Router 6.14.1
- Framer Motion 7.6.8
- Tailwind CSS 3.4.8

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - ES6+ required

## License

© 2025 IES - Integrated Environmental Solutions. All rights reserved.

