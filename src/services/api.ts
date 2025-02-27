import axios from 'axios';
import { submitToGoogleSheets } from './googleSheets';

// Use environment variable for API URL or default to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Check if we're in production (GitHub Pages)
const isProduction = window.location.hostname !== 'localhost';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('Received response:', response.status);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

// Projects
export const getProjects = () => api.get('/projects');
export const createProject = (data: any) => api.post('/projects', data);
export const updateProject = (id: string, data: any) => api.patch(`/projects/${id}`, data);
export const deleteProject = (id: string) => api.delete(`/projects/${id}`);

// Skills
export const getSkills = () => api.get('/skills');
export const createSkill = (data: any) => api.post('/skills', data);
export const updateSkill = (id: string, data: any) => api.patch(`/skills/${id}`, data);
export const deleteSkill = (id: string) => api.delete(`/skills/${id}`);

// Contact
export const submitContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}) => {
  try {
    // If in production (GitHub Pages), use Google Sheets direct submission
    if (isProduction) {
      console.log('Using Google Sheets direct submission in production');
      const success = await submitToGoogleSheets(data);
      return { message: 'Message sent successfully', success };
    } else {
      // In development, use the local API server
      console.log('Using local API server in development');
      const response = await api.post('/contact', data);
      return response.data;
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};

// Add auth token to requests
export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api; 