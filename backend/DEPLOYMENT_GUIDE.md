# Backend Deployment Guide

This guide will help you deploy your IES website backend with contact form functionality.

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Gmail account (or other email service)

---

## Part 1: Email Configuration

### Option A: Using Gmail (Recommended)

1. **Enable 2-Factor Authentication on your Gmail account**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

3. **Note your credentials:**
   ```
   EMAIL_SERVICE: gmail
   EMAIL_USER: your-email@gmail.com
   EMAIL_PASSWORD: your-16-char-app-password
   COMPANY_EMAIL: info@ies.com.pk (or your preferred email)
   ```

### Option B: Using Other Email Services

For Outlook, Yahoo, or custom SMTP:
```env
EMAIL_SERVICE=outlook  # or yahoo, etc.
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

---

## Part 2: Local Testing

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Create Environment File

```bash
# Copy example file
copy .env.example .env

# Edit .env file with your actual credentials
notepad .env
```

Fill in your actual values:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=your-actual-app-password
COMPANY_EMAIL=info@ies.com.pk
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Test Backend Locally

```bash
# Start backend server
npm run dev

# Backend should run on http://localhost:3001
```

### 4. Test Frontend Locally

In a new terminal:
```bash
# Go to project root
cd ..

# Start frontend
npm run dev

# Frontend should run on http://localhost:5173
```

### 5. Test Contact Form

1. Open browser to `http://localhost:5173/contact`
2. Fill out the contact form
3. Submit and verify:
   - Check terminal for logs
   - Check your COMPANY_EMAIL inbox for the message
   - Check the submitted email address for auto-reply

---

## Part 3: Deploy Backend to Vercel

### 1. Prepare Backend for Deployment

Your backend is ready with:
- ✅ `server.js` - Express server
- ✅ `package.json` - Dependencies
- ✅ `vercel.json` - Vercel configuration
- ✅ `.gitignore` - Ignore sensitive files

### 2. Push to GitHub

```bash
# Initialize git (if not already)
cd backend
git init
git add .
git commit -m "Initial backend setup"

# Create new repo on GitHub named "ies-backend"
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/ies-backend.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Import Project**
   - Click "Add New" → "Project"
   - Import your `ies-backend` repository

3. **Configure Project**
   - Framework Preset: Other
   - Root Directory: `./` (leave as is)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `EMAIL_SERVICE` | `gmail` |
   | `EMAIL_USER` | `your-email@gmail.com` |
   | `EMAIL_PASSWORD` | `your-app-password` |
   | `COMPANY_EMAIL` | `info@ies.com.pk` |
   | `FRONTEND_URL` | `https://your-frontend.vercel.app` |
   | `NODE_ENV` | `production` |

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your backend URL: `https://ies-backend.vercel.app`

---

## Part 4: Deploy Frontend to Vercel

### 1. Update Frontend Configuration

Create `.env` file in project root:
```env
VITE_API_URL=https://ies-backend.vercel.app
```

Or update `vite.config.js`:
```js
export default defineConfig({
  // ...existing config
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('https://ies-backend.vercel.app')
  }
})
```

### 2. Update Contact.jsx (Already Done)

The Contact.jsx is already configured to use:
```js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
```

### 3. Push Frontend to GitHub

```bash
# In project root
git add .
git commit -m "Update backend API URL"

# Create new repo on GitHub named "ies-website"
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/ies-website.git
git branch -M main
git push -u origin main
```

### 4. Deploy Frontend to Vercel

1. **Import Frontend Repository**
   - In Vercel, click "Add New" → "Project"
   - Import your `ies-website` repository

2. **Configure Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Add Environment Variable**
   
   | Name | Value |
   |------|-------|
   | `VITE_API_URL` | `https://ies-backend.vercel.app` |

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://ies-website.vercel.app`

---

## Part 5: Update Backend CORS

### Important: Update Backend Environment

After frontend is deployed, update backend's `FRONTEND_URL`:

1. Go to Vercel Dashboard → Your backend project
2. Settings → Environment Variables
3. Update `FRONTEND_URL` to: `https://ies-website.vercel.app`
4. Redeploy backend

---

## Part 6: Testing Production

### 1. Test Contact Form

1. Visit your live site: `https://ies-website.vercel.app/contact`
2. Fill out contact form with test data
3. Submit

### 2. Verify Emails

Check that you receive:
- Company notification email at `COMPANY_EMAIL`
- Auto-reply email to the submitted address

### 3. Check Logs

In Vercel Dashboard:
- Backend → Deployments → Latest → Runtime Logs
- Frontend → Deployments → Latest → Runtime Logs

---

## Troubleshooting

### Issue: CORS Error

**Solution:** Ensure backend `FRONTEND_URL` matches your exact frontend URL
```env
FRONTEND_URL=https://your-exact-frontend-url.vercel.app
```

### Issue: Email Not Sending

**Checks:**
1. Verify Gmail App Password is correct (16 characters, no spaces)
2. Check backend logs in Vercel for errors
3. Ensure 2FA is enabled on Gmail
4. Try using a different email service

### Issue: "Too many requests" error

**Solution:** Rate limit is 5 emails per 15 minutes per IP. This is intentional to prevent spam.

### Issue: 404 on API endpoint

**Checks:**
1. Verify backend is deployed successfully
2. Check `VITE_API_URL` in frontend environment variables
3. Test backend health: `https://your-backend.vercel.app/`

---

## Environment Variables Summary

### Backend (.env)
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
COMPANY_EMAIL=info@ies.com.pk
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend.vercel.app
```

---

## Custom Domain (Optional)

### Add Custom Domain to Frontend

1. In Vercel → Your frontend project → Settings → Domains
2. Add domain: `ies.com.pk`
3. Follow DNS instructions
4. Update backend `FRONTEND_URL` to: `https://ies.com.pk`

### Add Custom Domain to Backend

1. In Vercel → Your backend project → Settings → Domains
2. Add subdomain: `api.ies.com.pk`
3. Follow DNS instructions
4. Update frontend `VITE_API_URL` to: `https://api.ies.com.pk`

---

## Security Best Practices

✅ Never commit `.env` files to Git
✅ Use App Passwords, not regular passwords
✅ Rate limiting is enabled (5 emails per 15 min)
✅ Email validation is implemented
✅ CORS restricts requests to your frontend only
✅ All environment variables in Vercel are encrypted

---

## Support

If you encounter issues:

1. **Check Vercel Logs**: Dashboard → Deployments → Runtime Logs
2. **Test Backend Health**: Visit `https://your-backend.vercel.app/`
3. **Verify Environment Variables**: Settings → Environment Variables
4. **Check Email Credentials**: Try logging into email manually

---

## Quick Reference

| Service | Local | Production |
|---------|-------|------------|
| Frontend | http://localhost:5173 | https://ies-website.vercel.app |
| Backend | http://localhost:3001 | https://ies-backend.vercel.app |
| Backend Health | http://localhost:3001/ | https://ies-backend.vercel.app/ |
| Contact API | http://localhost:3001/api/contact | https://ies-backend.vercel.app/api/contact |

---

## Next Steps

1. ✅ Set up Gmail App Password
2. ✅ Test locally
3. ✅ Deploy backend to Vercel
4. ✅ Deploy frontend to Vercel
5. ✅ Update CORS settings
6. ✅ Test production contact form
7. 🎉 Your contact form is live!

---

**Need Help?** Check Vercel documentation: https://vercel.com/docs
