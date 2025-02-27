/**
 * Google Apps Script for handling form submissions to Google Sheets
 * 
 * Instructions:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Replace SHEET_ID with your Google Sheet ID (from the URL)
 * 5. Deploy as a web app:
 *    - Click Deploy > New deployment
 *    - Select type: Web app
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click Deploy
 * 6. Copy the web app URL and set it as VITE_GOOGLE_APPS_SCRIPT_URL in your .env file
 */

// The ID of your Google Sheet
const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

// Process form submission
function doPost(e) {
  try {
    // Get form data
    const params = e.parameter;
    
    // Log the received data
    console.log('Received form data:', JSON.stringify(params));
    
    // Open the spreadsheet and get the sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create a timestamp
    const timestamp = new Date().toISOString();
    
    // Prepare the data row
    const row = [
      timestamp,
      params.name || '',
      params.email || '',
      params.phone || '',
      params.subject || '',
      params.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Form data saved successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: 'Error saving form data: ' + error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService.createTextOutput(
    'This is a Google Apps Script web app for handling form submissions. ' +
    'Please use POST method to submit form data.'
  );
}

// Test function to verify the script is working
function test() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      subject: 'Test Subject',
      message: 'This is a test message'
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
} 