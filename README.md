# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Shweta Jalalapure Portfolio

A modern portfolio website for UI/UX Designer Shweta Jalalapure.

## Features

- Responsive design
- Contact form with Google Sheets integration
- Email notifications for new form submissions
- Modern UI with animations

## Live Demo

Visit the live portfolio at: [https://shwetajalalapure.github.io/ShwetaPortfolio](https://shwetajalalapure.github.io/ShwetaPortfolio)

## Setup Instructions

### Frontend Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Rename `.env.example` to `.env` (if not already done)
   - Update the values in the `.env` file with your credentials

4. Start the server:
   ```
   npm start
   ```

## Deployment Instructions

### Frontend Deployment to GitHub Pages

1. Create a GitHub repository named `ShwetaPortfolio`

2. Initialize Git in your project (if not already done):
   ```
   git init
   ```

3. Add your GitHub repository as remote:
   ```
   git remote add origin https://github.com/shwetajalalapure/ShwetaPortfolio.git
   ```

4. Commit your changes:
   ```
   git add .
   git commit -m "Initial commit"
   ```

5. Push to GitHub:
   ```
   git push -u origin main
   ```

6. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

### Backend Deployment

The backend can be deployed to platforms like Render, Heroku, or Railway:

1. Create a new web service on your chosen platform
2. Connect your GitHub repository
3. Set the following:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: Copy all variables from your `.env` file

## Google Sheets Integration Setup

To enable the contact form to save submissions to Google Sheets:

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Google Sheets API for your project

2. **Create Service Account Credentials**:
   - In your Google Cloud project, go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" and select "Service Account"
   - Fill in the service account details and click "Create"
   - Grant the service account the "Editor" role
   - Click "Done"

3. **Generate a JSON Key**:
   - Find your service account in the list
   - Click on it and go to the "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose JSON format and click "Create"
   - The key file will be downloaded to your computer

4. **Create a Google Sheet**:
   - Create a new Google Sheet
   - Add the following headers in row 1: Timestamp, Name, Email, Phone, Subject, Message
   - Share the sheet with the email address of your service account (with Editor permissions)
   - Copy the Sheet ID from the URL (the long string between /d/ and /edit in the URL)

5. **Update Environment Variables**:
   - Open the downloaded JSON key file
   - Update the variables in your `.env` file with the values from the JSON file

## Email Notification Setup

To receive email notifications when someone submits the contact form:

1. **Generate an App Password for Gmail**:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Scroll down and click on "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Enter a name like "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password

2. **Update Environment Variables**:
   - Update the SMTP_USER and SMTP_PASS variables in your `.env` file

## Credits

- Design & Development: Shweta Jalalapure
- Technologies: React, TypeScript, Tailwind CSS, Node.js, Express
- Animations: Framer Motion
