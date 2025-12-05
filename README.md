# IES Website (Vite + React + Node.js Backend)

This repository contains a modern, mobile-responsive website for **IES (Integrated & Efficient Solutions)** - a professional MEP (Mechanical, Electrical & Plumbing) engineering consultancy firm.

## 🚀 Features

### Frontend
✅ **React 18** with Vite for fast development  
✅ **Tailwind CSS** for modern, responsive styling  
✅ **Framer Motion** for smooth animations and transitions  
✅ **React Router** for client-side routing  
✅ **SEO optimized** with meta tags and descriptions  
✅ **Mobile responsive** design  
✅ **GitHub Pages deployment ready**

### Backend
✅ **Node.js + Express** API server  
✅ **Nodemailer** email integration  
✅ **Contact form** with email notifications  
✅ **Rate limiting** and security features  
✅ **CORS protection**  
✅ **Beautiful HTML email templates**

## 📄 Pages Included

- **Home** - Hero section, stats, mission/vision/values, company overview
- **About** - Company information, mission, vision, values
- **Services** - MEP engineering services (Planning, Design, Supervision, Optimization)
- **Specialization** - Core competencies and expertise
- **Activities** - 12+ domains of service (HVAC, BIM, Energy, Fire Protection, etc.)
- **Projects** - Completed projects showcase with modal details (24 projects)
- **Products** - MEP products and solutions
- **Clients** - Client categories and market segments
- **Team** - Team overview
- **Contact** - Contact form with backend integration
- **Careers** - Job openings and benefits
- **FAQ** - Frequently asked questions
- **Design Standards** - International standards (ASHRAE, CIBSE, ISO, NFPA)
- **Professional Affiliations** - PEC, ASHRAE, IET, CIBSE memberships

## 🛠️ Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Git

### 1. Clone Repository

```bash
git clone https://github.com/umarahad2005/ies-website.git
cd ies-website
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Backend Email

```bash
# In backend folder, copy .env.example to .env
copy .env.example .env
```

Edit `backend/.env` with your credentials:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
COMPANY_EMAIL=office@ies.com.pk
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Get Gmail App Password:** https://myaccount.google.com/apppasswords

### 5. Run Development Servers

```bash
# Terminal 1: Start Backend
cd backend
npm run dev

# Terminal 2: Start Frontend
cd ..
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## 📦 Project Structure

```
ies-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── logos/
│   │   └── logo-ies.jpg       # IES logo
│   ├── robots.txt
│   ├── sitemap.xml
│   └── 404.html               # GitHub Pages 404 handler
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Sticky header with navigation
│   │   ├── Footer.jsx         # Footer with links
│   │   └── HeroSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Specialization.jsx
│   │   ├── Activities.jsx
│   │   ├── Products.jsx
│   │   ├── Clients.jsx
│   │   ├── Projects.jsx       # 24 projects with modal
│   │   ├── Team.jsx
│   │   ├── Contact.jsx        # Backend integrated form
│   │   ├── Careers.jsx
│   │   ├── FAQ.jsx
│   │   ├── DesignStandards.jsx
│   │   └── ProfessionalAffiliations.jsx
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind imports
├── backend/
│   ├── server.js              # Express API server
│   ├── package.json           # Backend dependencies
│   ├── vercel.json            # Vercel deployment config
│   ├── .env.example           # Environment template
│   ├── test-api.js            # API testing script
│   ├── DEPLOYMENT_GUIDE.md    # Deployment instructions
│   └── README.md              # Backend documentation
├── package.json
├── vite.config.js             # Vite configuration
├── tailwind.config.cjs
├── postcss.config.cjs
├── BACKEND_SETUP_COMPLETE.md  # Backend setup guide
└── README.md                  # This file
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Configure Repository Secret** (Optional)
   - Settings → Secrets → Actions
   - Add `VITE_API_URL` with your backend URL

3. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Automatic Deployment**
   - GitHub Actions will automatically build and deploy
   - Visit: `https://umarahad2005.github.io/ies-website/`

### Deploy Backend to Vercel

See `backend/DEPLOYMENT_GUIDE.md` for detailed instructions.

Quick steps:
```bash
cd backend
npm install -g vercel
vercel
```

## 🔧 Build for Production

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

Output: `dist/` folder

## 🎨 Customization

### Update Logo
Replace `public/logos/logo-ies.jpg` with your logo

### Update Contact Information
Edit `src/pages/Contact.jsx`:
```jsx
const offices = [
  {
    city: 'Lahore',
    address: '18-J2, Johar Town, Lahore, Pakistan',
    phone: '042 3546 1094',
    email: 'office@ies.com.pk',
    icon: '🏢'
  }
]
```

### Update Colors
Modify `tailwind.config.cjs` for theme colors

### Update Base URL (for GitHub Pages)
Edit `vite.config.js`:
```js
base: '/ies-website/', // Change to your repo name
```

## 🧪 Testing

### Test Backend API
```bash
cd backend
node test-api.js
```

### Test Contact Form
1. Start both frontend and backend servers
2. Navigate to http://localhost:5173/contact
3. Submit test form
4. Check email inbox

## 📱 Contact Information

- **Email:** office@ies.com.pk
- **Phone:** 042 3546 1094
- **Address:** 18-J2, Johar Town, Lahore, Pakistan

## 💻 Technologies

### Frontend
- React 18.2.0
- Vite 5.1.0
- React Router 6.14.1
- Framer Motion 7.6.8
- Tailwind CSS 3.4.8

### Backend
- Node.js
- Express 4.18.2
- Nodemailer 6.9.7
- CORS 2.8.5
- express-rate-limit 7.1.5

## 🔒 Security Features

- Rate limiting (5 emails per 15 min)
- Email validation
- CORS protection
- Environment variables for secrets
- Input sanitization

## 📚 Documentation

- **Backend Setup:** `BACKEND_SETUP_COMPLETE.md`
- **Deployment Guide:** `backend/DEPLOYMENT_GUIDE.md`
- **Backend API:** `backend/README.md`

## 🐛 Troubleshooting

### 404 on Page Refresh (GitHub Pages)
- The `404.html` file redirects to main app
- React Router handles client-side routing

### CORS Errors
- Update `FRONTEND_URL` in backend `.env`
- Ensure URLs match exactly (http/https)

### Email Not Sending
- Use Gmail App Password, not regular password
- Enable 2FA on Gmail account
- Check backend logs for errors

## 📄 License

© 2025 IES - Integrated & Efficient Solutions. All rights reserved.

## 🤝 Contributing

This is a private project for IES. For questions or issues, contact the development team.

---

**Live Demo:** https://umarahad2005.github.io/ies-website/  
**Repository:** https://github.com/umarahad2005/ies-website

