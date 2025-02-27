import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'shwetavirupaksh@gmail.com',
    pass: process.env.SMTP_PASS
  }
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
    console.log('Email notifications will be disabled, but form submissions will still work.');
  } else {
    console.log('Email server is ready to send messages');
  }
});

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: '"Portfolio Contact Form" <shwetavirupaksh@gmail.com>',
      to,
      subject,
      text,
      html: html || text.replace(/\n/g, '<br>')
    });
    
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    console.log('Continuing without sending email notification');
    // Don't throw the error so the form submission can still complete
    return { error: error.message, emailSent: false };
  }
}; 