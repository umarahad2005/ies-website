const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting - 5 emails per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail', // gmail, outlook, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'active',
    message: 'IES Backend API is running',
    version: '1.0.0'
  });
});

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid email address' 
      });
    }

    // Email to company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #22c55e; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>This email was sent from IES Website Contact Form</p>
            <p>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Auto-reply to user
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting IES',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
            Thank You for Contacting IES
          </h2>
          
          <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
            Dear ${name},
          </p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for reaching out to IES (Integrated & Efficient Solutions). We have received your message and our team will review it shortly.
          </p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #22c55e; margin-top: 0;">Your Message Summary:</h3>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="color: #4b5563; font-style: italic;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            We typically respond within 24-48 hours during business days. If your inquiry is urgent, please feel free to call us directly.
          </p>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> info@ies.com.pk</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>Phone:</strong> +92 XXX XXXXXXX</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Best regards,<br>
            <strong style="color: #22c55e;">IES Team</strong><br>
            Integrated & Efficient Solutions
          </p>
          
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; margin-top: 30px;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReply);

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Endpoint not found' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
