# EmailJS Setup Guide for IES Website Contact Form

## Prerequisites
- EmailJS account (https://www.emailjs.com/)
- Email service connected (Gmail, Outlook, etc.)

## Step-by-Step Setup Instructions

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (100 emails/month free tier)
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}} - Contact Form Submission

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from the IES website contact form.
```

4. Template Variables to use:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (optional)

5. Note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)
3. This key is safe to use in frontend code

### 5. Update the Contact.jsx File

Open `src/pages/Contact.jsx` and find these lines (around line 18-20):

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your EmailJS Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
```

Replace with your actual credentials:

```javascript
const SERVICE_ID = 'service_abc123' // Your actual Service ID
const TEMPLATE_ID = 'template_xyz789' // Your actual Template ID
const PUBLIC_KEY = 'AbCdEfGhIjKlMnOp' // Your actual Public Key
```

### 6. Test the Contact Form

1. Run the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form with test data
4. Click "Send Message"
5. Check your connected email inbox for the test message

## Template Variables Mapping

The contact form sends these variables to EmailJS:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| Name | `from_name` | Sender's full name |
| Email | `from_email` | Sender's email address |
| Subject | `subject` | Email subject line |
| Message | `message` | Email message body |
| - | `to_name` | Hardcoded as "IES Team" |

## Email Template Example

Here's a complete email template you can use in EmailJS:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
  <div style="background: linear-gradient(135deg, #16a34a 0%, #10b981 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
    <h2 style="color: #16a34a; margin-top: 0;">Subject: {{subject}}</h2>
  </div>
  
  <div style="margin-bottom: 20px;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #16a34a;">{{from_email}}</a></p>
  </div>
  
  <div style="background: #ffffff; padding: 20px; border-left: 4px solid #16a34a; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #374151;">Message:</h3>
    <p style="line-height: 1.6; color: #4b5563;">{{message}}</p>
  </div>
  
  <div style="text-align: center; padding: 20px; background: #f3f4f6; border-radius: 8px;">
    <p style="margin: 0; color: #6b7280; font-size: 14px;">
      This email was sent from the IES website contact form
    </p>
  </div>
</div>
```

## Security Notes

✅ **Safe to commit:**
- Service ID
- Template ID
- Public Key

❌ **Never commit:**
- Private Key (not used in this setup)
- Email service credentials

## Troubleshooting

### "Failed to send email"
- Check that all IDs and keys are correct
- Verify email service is connected in EmailJS dashboard
- Check browser console for detailed error messages
- Ensure you haven't exceeded the free tier limit (100 emails/month)

### Emails not arriving
- Check spam/junk folder
- Verify email service connection in EmailJS
- Test email service directly in EmailJS dashboard
- Confirm template variables are correctly mapped

### CORS errors
- EmailJS handles CORS automatically
- If issues persist, check EmailJS dashboard settings
- Ensure Public Key is correct

## Free Tier Limits

- **100 emails per month**
- Upgrade to paid plan for more emails
- Monitor usage in EmailJS dashboard

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Note:** After updating the credentials, restart the development server for changes to take effect.
