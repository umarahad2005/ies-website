# 🎉 Backend Integration Complete!

Your IES website now has a professional, secure backend for handling contact form submissions with email notifications.

---

## 📦 What's Been Created

### Backend Infrastructure
```
backend/
├── server.js                 # Express API with Nodemailer
├── package.json              # Dependencies & scripts
├── vercel.json              # Deployment configuration
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── test-api.js              # API testing script
├── DEPLOYMENT_GUIDE.md      # Complete deployment guide
└── README.md                # Backend documentation
```

### Key Features

✅ **Express Server** with RESTful API  
✅ **Nodemailer Integration** for email sending  
✅ **Two Email System**:
   - Company notification with full details
   - Auto-reply thank you message to users  
✅ **Security Features**:
   - Rate limiting (5 emails per 15 min)
   - Email validation
   - CORS protection
   - Environment variables  
✅ **Beautiful HTML Email Templates**  
✅ **Error Handling & Logging**  
✅ **Vercel Deployment Ready**  

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Email
```bash
# Copy environment template
copy .env.example .env

# Edit .env with your credentials
notepad .env
```

Required credentials:
- **EMAIL_USER**: Your Gmail address
- **EMAIL_PASSWORD**: Gmail App Password (get from https://myaccount.google.com/apppasswords)
- **COMPANY_EMAIL**: Where to receive contact form emails

### Step 3: Run & Test
```bash
# Terminal 1: Start backend
npm run dev

# Terminal 2: Start frontend
cd ..
npm run dev

# Terminal 3: Test API
cd backend
node test-api.js
```

Visit http://localhost:5173/contact and test the form!

---

## 📧 Email Setup (Gmail)

### Generate App Password

1. **Enable 2FA** on Gmail
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Create App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Paste in `.env` as `EMAIL_PASSWORD`

### Example .env Configuration
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
COMPANY_EMAIL=info@ies.com.pk
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## 🧪 Testing

### Option 1: Use Test Script
```bash
cd backend
node test-api.js
```

This will:
- Test health check endpoint
- Submit a test contact form
- Verify validation works
- Show results in terminal

### Option 2: Browser Testing
1. Start both servers (backend + frontend)
2. Open http://localhost:5173/contact
3. Fill out the form
4. Submit
5. Check your email inbox!

### Option 3: Postman/Thunder Client
```
POST http://localhost:3001/api/contact
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+92 300 1234567",
  "subject": "Test",
  "message": "This is a test"
}
```

---

## 📨 Email Preview

### What Company Receives
```
Subject: New Contact Form Submission: Project Inquiry

┌───────────────────────────────────────┐
│ New Contact Form Submission           │
├───────────────────────────────────────┤
│ Name: John Doe                        │
│ Email: john@example.com               │
│ Phone: +92 300 1234567                │
│ Subject: Project Inquiry              │
├───────────────────────────────────────┤
│ Message:                              │
│ I would like to discuss a MEP         │
│ project for our new building...       │
└───────────────────────────────────────┘
```

### What User Receives (Auto-Reply)
```
Subject: Thank you for contacting IES

Dear John Doe,

Thank you for reaching out to IES. We have 
received your message and our team will review 
it shortly.

Your Message Summary:
- Subject: Project Inquiry
- Message: I would like to discuss...

We typically respond within 24-48 hours.

Best regards,
IES Team
```

---

## 🌐 Deployment to Production

### Quick Deploy Steps

1. **Deploy Backend**
   ```bash
   # Push to GitHub
   cd backend
   git init
   git add .
   git commit -m "IES backend"
   git push
   
   # Deploy to Vercel
   # Import repo at vercel.com
   # Add environment variables
   ```

2. **Update Frontend**
   ```bash
   # Create .env in project root
   echo VITE_API_URL=https://your-backend.vercel.app > .env
   
   # Deploy to Vercel
   git add .
   git commit -m "Add backend integration"
   git push
   ```

3. **Update CORS**
   - In Vercel backend settings
   - Update `FRONTEND_URL` to your live frontend URL
   - Redeploy

📖 **Full Guide**: See `backend/DEPLOYMENT_GUIDE.md` for detailed instructions

---

## 📁 Modified Files

### Frontend Changes
**`src/pages/Contact.jsx`**
- ✅ Removed EmailJS dependency
- ✅ Added backend API integration
- ✅ Added phone field to form
- ✅ Improved error handling
- ✅ Environment variable support

---

## 🔒 Security Features

| Feature | Description |
|---------|-------------|
| **Rate Limiting** | 5 emails per 15 minutes per IP |
| **Email Validation** | Regex pattern validation |
| **CORS Protection** | Only your frontend can access |
| **Environment Variables** | No secrets in code |
| **Input Sanitization** | Protected against injection |
| **Safe Error Messages** | No sensitive info leaked |

---

## 🐛 Troubleshooting

### Backend Won't Start
```bash
# Check if port is in use
netstat -ano | findstr :3001

# Install dependencies
npm install

# Check Node version (needs 14+)
node --version
```

### Emails Not Sending
- ✅ Verify Gmail App Password (16 characters, no spaces)
- ✅ Check 2FA is enabled on Gmail
- ✅ Review backend terminal logs
- ✅ Try logging into Gmail manually
- ✅ Check spam folder

### CORS Errors
- ✅ Ensure `FRONTEND_URL` matches exactly
- ✅ Include `http://` or `https://`
- ✅ No trailing slash
- ✅ Restart backend after .env changes

### "Cannot GET /api/contact"
- ✅ Endpoint is POST, not GET
- ✅ Use fetch/axios with POST method
- ✅ Include Content-Type: application/json

---

## 📊 API Reference

### Health Check
```http
GET http://localhost:3001/
```
Response:
```json
{
  "status": "active",
  "message": "IES Backend API is running",
  "version": "1.0.0"
}
```

### Contact Form
```http
POST http://localhost:3001/api/contact
Content-Type: application/json
```
Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+92 300 1234567",
  "subject": "Project Inquiry",
  "message": "I would like to discuss..."
}
```

Success (200):
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

Error (400/500):
```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## ✅ Testing Checklist

### Local Testing
- [ ] Backend starts: `npm run dev`
- [ ] Health check works: http://localhost:3001/
- [ ] Test script passes: `node test-api.js`
- [ ] Frontend connects to backend
- [ ] Contact form submits successfully
- [ ] Company email received
- [ ] User auto-reply received
- [ ] Rate limiting works (test 6th email)
- [ ] Validation works (test invalid email)

### Production Testing
- [ ] Backend deployed to Vercel
- [ ] Environment variables configured
- [ ] Frontend deployed to Vercel
- [ ] CORS updated with production URL
- [ ] Production contact form works
- [ ] Emails arrive in production
- [ ] Rate limiting works in production
- [ ] Custom domain configured (optional)

---

## 📚 Documentation

- **Main Setup Guide**: `BACKEND_SETUP.md` (this file)
- **Deployment Guide**: `backend/DEPLOYMENT_GUIDE.md`
- **Backend Docs**: `backend/README.md`
- **API Testing**: `backend/test-api.js`

---

## 🎯 Next Steps

### Immediate
1. ✅ Install dependencies: `cd backend && npm install`
2. ✅ Configure .env with email credentials
3. ✅ Test locally: `npm run dev` + `node test-api.js`
4. ✅ Verify emails are arriving

### Deployment
1. 📖 Read `backend/DEPLOYMENT_GUIDE.md`
2. 🚀 Deploy backend to Vercel
3. 🌐 Deploy frontend to Vercel
4. ✅ Test production contact form
5. 🎉 Go live!

---

## 💡 Tips

### Development
- Use `npm run dev` for auto-restart on changes
- Check terminal logs for errors
- Test API with `test-api.js` script
- Use browser DevTools Network tab

### Production
- Use environment variables for all secrets
- Enable Vercel logs for debugging
- Set up alerts for failed emails
- Monitor rate limit usage
- Keep dependencies updated

---

## 🎉 Summary

You now have:

✅ **Professional backend API** with Express + Nodemailer  
✅ **Secure contact form** with validation & rate limiting  
✅ **Dual email system** (company notification + user auto-reply)  
✅ **Beautiful HTML templates** for emails  
✅ **Complete documentation** for setup & deployment  
✅ **Testing utilities** to verify everything works  
✅ **Production-ready** configuration for Vercel  

**Status**: ✅ Ready to test locally and deploy!

---

## 📞 Support Resources

- **Gmail App Passwords**: https://myaccount.google.com/apppasswords
- **Vercel Documentation**: https://vercel.com/docs
- **Nodemailer Docs**: https://nodemailer.com/about/
- **Express Guide**: https://expressjs.com/

---

**Created**: Complete backend infrastructure with email integration  
**Updated**: Contact form to use secure backend API  
**Next**: Test locally, then deploy to production!

Happy coding! 🚀
