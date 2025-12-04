# Backend Setup Complete! 🎉

Your IES website now has a fully functional backend for the contact form.

## What's Been Created

### Backend Structure
```
backend/
├── server.js              # Express API server with Nodemailer
├── package.json           # Dependencies (Express, Nodemailer, CORS, etc.)
├── vercel.json           # Vercel deployment configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── DEPLOYMENT_GUIDE.md   # Complete deployment instructions
└── README.md             # Backend documentation
```

### Features Implemented

✅ **Express Server**
- RESTful API endpoint for contact form
- Health check endpoint
- CORS protection
- Rate limiting (5 emails per 15 min)

✅ **Email System (Nodemailer)**
- Company notification email
- Auto-reply to users
- Beautiful HTML email templates
- Gmail/Outlook support

✅ **Frontend Integration**
- Contact.jsx updated to use backend API
- Environment variable support
- Error handling

✅ **Security**
- Email validation
- Rate limiting
- CORS protection
- Environment variables for secrets

---

## Quick Start Guide

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Email

1. **Get Gmail App Password**
   - Enable 2FA: https://myaccount.google.com/security
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Copy the 16-character password

2. **Create .env file**
   ```bash
   copy .env.example .env
   ```

3. **Edit .env with your credentials**
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password-here
   COMPANY_EMAIL=info@ies.com.pk
   PORT=3001
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

### Step 3: Test Locally

1. **Start Backend**
   ```bash
   npm run dev
   # Backend runs on http://localhost:3001
   ```

2. **Start Frontend** (in new terminal)
   ```bash
   cd ..
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. **Test Contact Form**
   - Open http://localhost:5173/contact
   - Fill out the form
   - Submit
   - Check your email inbox!

---

## What Happens When Form is Submitted

1. User fills contact form on website
2. Frontend sends data to backend API
3. Backend validates the data
4. Two emails are sent:
   - **Company Email**: Full details with reply-to set to user
   - **User Auto-Reply**: Thank you message with summary

---

## Next Steps: Deployment

Follow the complete deployment guide:

📖 **[backend/DEPLOYMENT_GUIDE.md](./backend/DEPLOYMENT_GUIDE.md)**

### Quick Summary:

1. **Deploy Backend to Vercel**
   - Push backend to GitHub
   - Import to Vercel
   - Add environment variables
   - Get backend URL: `https://ies-backend.vercel.app`

2. **Update Frontend**
   - Add `.env` file with backend URL
   - Deploy to Vercel
   - Test production contact form

---

## API Reference

### Health Check
```bash
GET http://localhost:3001/

Response:
{
  "status": "active",
  "message": "IES Backend API is running",
  "version": "1.0.0"
}
```

### Contact Form Submission
```bash
POST http://localhost:3001/api/contact

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+92 300 1234567",
  "subject": "Project Inquiry",
  "message": "I would like to discuss..."
}

Success Response (200):
{
  "success": true,
  "message": "Message sent successfully!"
}

Error Response (400/500):
{
  "success": false,
  "error": "Error message"
}
```

---

## Email Templates Preview

### Company Notification Email
```
Subject: New Contact Form Submission: [Subject]

┌─────────────────────────────────────┐
│ New Contact Form Submission         │
├─────────────────────────────────────┤
│ Name: John Doe                      │
│ Email: john@example.com             │
│ Phone: +92 300 1234567              │
│ Subject: Project Inquiry            │
├─────────────────────────────────────┤
│ Message:                            │
│ I would like to discuss...          │
└─────────────────────────────────────┘
```

### User Auto-Reply Email
```
Subject: Thank you for contacting IES

┌─────────────────────────────────────┐
│ Thank You for Contacting IES        │
├─────────────────────────────────────┤
│ Dear John Doe,                      │
│                                     │
│ Thank you for reaching out to IES.  │
│ We have received your message and   │
│ will respond within 24-48 hours.    │
│                                     │
│ Your Message Summary:               │
│ Subject: Project Inquiry            │
│ Message: I would like to discuss... │
│                                     │
│ Contact Information:                │
│ Email: info@ies.com.pk              │
│ Phone: +92 XXX XXXXXXX              │
└─────────────────────────────────────┘
```

---

## Troubleshooting

### Backend won't start
- Check if port 3001 is available
- Verify all dependencies installed: `npm install`

### Emails not sending
- Verify Gmail App Password is correct
- Check 2FA is enabled
- Review backend terminal logs
- Test email login manually

### CORS errors
- Ensure `FRONTEND_URL` in backend .env matches frontend URL exactly
- Include `http://` or `https://`
- No trailing slash

### Rate limit exceeded
- Limit is 5 emails per 15 minutes per IP
- This is intentional to prevent spam
- Wait 15 minutes or adjust in `server.js`

---

## File Changes Made

### New Files Created
- ✅ `backend/server.js` - Express server with API
- ✅ `backend/package.json` - Dependencies
- ✅ `backend/vercel.json` - Vercel config
- ✅ `backend/.env.example` - Environment template
- ✅ `backend/.gitignore` - Git ignore
- ✅ `backend/DEPLOYMENT_GUIDE.md` - Deployment guide
- ✅ `backend/README.md` - Backend docs
- ✅ `BACKEND_SETUP.md` - This file

### Modified Files
- ✅ `src/pages/Contact.jsx` - Updated to use backend API
  - Removed EmailJS dependency
  - Added fetch API call to backend
  - Added phone field to form
  - Improved error handling

---

## Environment Variables Summary

### Backend (.env)
```env
EMAIL_SERVICE=gmail                    # Email provider
EMAIL_USER=your-email@gmail.com        # Your email
EMAIL_PASSWORD=your-app-password       # 16-char app password
COMPANY_EMAIL=info@ies.com.pk          # Where to receive emails
PORT=3001                              # Server port
NODE_ENV=development                   # development/production
FRONTEND_URL=http://localhost:5173     # Frontend URL for CORS
```

### Frontend (.env) - For Production
```env
VITE_API_URL=https://ies-backend.vercel.app
```

---

## Security Features

✅ **Rate Limiting**: 5 emails per 15 minutes per IP  
✅ **Email Validation**: Regex pattern validation  
✅ **CORS Protection**: Only your frontend can access API  
✅ **Environment Variables**: Sensitive data not in code  
✅ **Input Sanitization**: Protected against injection  
✅ **Error Handling**: Safe error messages  

---

## Testing Checklist

- [ ] Backend starts without errors
- [ ] Health check responds: `http://localhost:3001/`
- [ ] Frontend connects to backend
- [ ] Contact form submits successfully
- [ ] Company email received
- [ ] User auto-reply received
- [ ] Rate limiting works (test 6th email)
- [ ] Error handling works (test invalid email)

---

## Production Checklist

- [ ] Gmail App Password generated
- [ ] Backend deployed to Vercel
- [ ] Environment variables added to Vercel
- [ ] Frontend .env updated with backend URL
- [ ] Frontend deployed to Vercel
- [ ] Backend CORS updated with frontend URL
- [ ] Production contact form tested
- [ ] Company emails arriving
- [ ] Auto-reply emails arriving

---

## Resources

- **Deployment Guide**: `backend/DEPLOYMENT_GUIDE.md`
- **Backend Docs**: `backend/README.md`
- **Gmail App Passwords**: https://myaccount.google.com/apppasswords
- **Vercel Docs**: https://vercel.com/docs
- **Nodemailer Docs**: https://nodemailer.com/about/

---

## Need Help?

1. Check terminal logs for errors
2. Review `backend/DEPLOYMENT_GUIDE.md`
3. Test backend health: `http://localhost:3001/`
4. Verify environment variables

---

## Summary

Your IES website now has:

🎉 **Fully functional contact form**  
📧 **Professional email notifications**  
🔒 **Secure backend API**  
⚡ **Rate limiting & validation**  
📱 **Auto-reply to users**  
☁️ **Ready for Vercel deployment**  

**Next**: Follow `backend/DEPLOYMENT_GUIDE.md` to deploy to production!

---

**Created**: Backend infrastructure with Express + Nodemailer  
**Updated**: Contact.jsx to use backend API  
**Status**: ✅ Ready for testing & deployment
