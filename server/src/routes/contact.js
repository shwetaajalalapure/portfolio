import express from 'express';
import { sendEmail } from '../utils/email.js';
import { appendToGoogleSheet } from '../utils/googleSheets.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    
    // 1. Append to Google Sheet
    let sheetResponse;
    try {
      sheetResponse = await appendToGoogleSheet(req.body);
      console.log('Appended to Google Sheet successfully');
    } catch (sheetError) {
      console.error('Google Sheet error:', sheetError);
      return res.status(500).json({ 
        message: 'Failed to save your message',
        error: sheetError.message 
      });
    }
    
    // 2. Send email notification
    const formData = req.body;
    const emailText = `
      New Contact Form Submission:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    try {
      await sendEmail({
        to: 'shwetavirupaksh@gmail.com',
        subject: `New Contact Form: ${formData.subject}`,
        text: emailText,
        html: emailText.replace(/\n/g, '<br>')
      });
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Continue even if email fails
    }

    // 3. Send success response
    res.status(201).json({ 
      message: 'Message sent successfully',
      sheetResponse
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(400).json({ 
      message: 'Failed to send message',
      error: error.message 
    });
  }
});

// Get all messages (protected) - This endpoint will no longer work without database
router.get('/', auth, async (req, res) => {
  res.status(501).json({ message: 'This endpoint is no longer supported as data is only stored in Google Sheets' });
});

// Update message status (protected) - This endpoint will no longer work without database
router.patch('/:id', auth, async (req, res) => {
  res.status(501).json({ message: 'This endpoint is no longer supported as data is only stored in Google Sheets' });
});

export default router; 