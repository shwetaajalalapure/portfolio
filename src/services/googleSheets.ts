import axios from 'axios';

/**
 * This service handles the submission of form data to Google Sheets
 * It uses a Google Apps Script web app to submit data directly to a Google Sheet
 */

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

/**
 * Submit form data to Google Sheets using a Google Apps Script web app
 */
export const submitToGoogleSheets = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Log the form data for debugging
    console.log('Attempting to submit form data to Google Sheets:', formData);
    
    // Get the Google Apps Script URL from environment variables or use the default
    const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || 
      'https://script.google.com/macros/s/AKfycbxeN3oMRgCDtknmVLTrz5awoj0yT9sQbTtjtj0Jwo_ASNm3nnqM-mJ24Mb3Oi5eH0F9MQ/exec';
    
    console.log('Using Google Apps Script URL:', scriptUrl);
    
    // Create a form element for a more reliable submission method
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = scriptUrl;
    
    // Add callback parameter for HTML response
    const callbackField = document.createElement('input');
    callbackField.type = 'hidden';
    callbackField.name = 'callback';
    callbackField.value = 'html';
    form.appendChild(callbackField);
    
    // Convert the form data to hidden inputs
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        // @ts-ignore
        hiddenField.value = formData[key] || '';
        form.appendChild(hiddenField);
      }
    }
    
    // Create an iframe to submit the form
    const iframe = document.createElement('iframe');
    iframe.name = 'google-script-target';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Set the form target to the iframe
    form.target = 'google-script-target';
    
    // Append the form to the document body
    document.body.appendChild(form);
    
    // Create a promise that resolves when the iframe loads
    return new Promise((resolve, reject) => {
      iframe.onload = () => {
        try {
          // Clean up
          setTimeout(() => {
            document.body.removeChild(form);
            document.body.removeChild(iframe);
          }, 500);
          
          console.log('Form submitted successfully to Google Sheets');
          resolve(true);
        } catch (error) {
          console.error('Error in iframe onload:', error);
          reject(error);
        }
      };
      
      iframe.onerror = (error) => {
        console.error('Iframe error:', error);
        reject(new Error('Form submission failed'));
      };
      
      // Submit the form
      form.submit();
    });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
}; 