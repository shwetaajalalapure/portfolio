import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'srikumarpride@gmail.com',
    pass: 'stca ocky epyn myjs'
  }
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: '"Portfolio Contact Form" <srikumarpride@gmail.com>',
      to,
      subject,
      text,
      html: html || text.replace(/\n/g, '<br>')
    });
    
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email notification: ' + error.message);
  }
}; 