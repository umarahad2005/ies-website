# IES Backend - Contact Form API

Backend API for IES website contact form with email notifications using Nodemailer.

## Features

✅ Contact form API endpoint  
✅ Email notifications to company  
✅ Auto-reply to users  
✅ Rate limiting (5 emails per 15 minutes per IP)  
✅ Email validation  
✅ CORS protection  
✅ Beautiful HTML email templates  
✅ Error handling  
✅ Vercel serverless deployment ready  

---

## Tech Stack

- **Node.js** - Runtime
- **Express** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin protection
- **express-rate-limit** - Rate limiting
- **dotenv** - Environment variables

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

Edit `.env` with your credentials:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
COMPANY_EMAIL=info@ies.com.pk
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Run Development Server

```bash
npm run dev
```

Server runs on `http://localhost:3001`

---

## API Endpoints

### Health Check
```
GET /
```

Response:
```json
{
  "status": "active",
  "message": "IES Backend API is running",
  "version": "1.0.0"
}
```

### Submit Contact Form
```
POST /api/contact
```

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+92 300 1234567",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

Success Response (200):
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

Error Response (400/500):
```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## Email Templates

### Company Notification Email
- Professional HTML template
- Includes all form details
- Reply-to set to user's email
- Timestamp included

### Auto-Reply Email
- Branded IES template
- Thank you message
- Message summary
- Contact information
- Professional footer

---

## Rate Limiting

Protected against spam:
- 5 emails per IP per 15 minutes
- Returns 429 status if exceeded

---

## Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete deployment instructions.

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_SERVICE` | Email provider | `gmail` |
| `EMAIL_USER` | Your email address | `contact@ies.com.pk` |
| `EMAIL_PASSWORD` | App password | `abcd efgh ijkl mnop` |
| `COMPANY_EMAIL` | Recipient email | `info@ies.com.pk` |
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment | `production` |
| `FRONTEND_URL` | Frontend URL for CORS | `https://ies.com.pk` |

---

## Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in `EMAIL_PASSWORD`

---

## Security Features

✅ Rate limiting to prevent abuse  
✅ Email validation (regex)  
✅ CORS protection  
✅ Environment variables for secrets  
✅ Input sanitization  
✅ Error logging without exposing internals  

---

## Testing

### Test Locally

```bash
# Start server
npm run dev

# Test with curl
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

### Test with Postman

1. Create POST request to `http://localhost:3001/api/contact`
2. Set header: `Content-Type: application/json`
3. Add JSON body with form fields
4. Send request
5. Check email inbox

---

## Project Structure

```
backend/
├── server.js              # Express server & API endpoints
├── package.json           # Dependencies
├── vercel.json           # Vercel deployment config
├── .env.example          # Environment template
├── .gitignore            # Git ignore rules
├── DEPLOYMENT_GUIDE.md   # Deployment instructions
└── README.md             # This file
```

---

## Troubleshooting

### Email Not Sending

1. Verify Gmail App Password
2. Check 2FA is enabled
3. Review server logs
4. Test email credentials

### CORS Errors

1. Verify `FRONTEND_URL` matches exactly
2. Include `http://` or `https://`
3. No trailing slash
4. Redeploy after changing

### Rate Limit Exceeded

Wait 15 minutes or adjust limits in `server.js`

---

## Scripts

```bash
npm start       # Production server
npm run dev     # Development with nodemailer
```

---

## License

Private - IES (Integrated & Efficient Solutions)

---

## Support

For issues or questions, contact the development team.
