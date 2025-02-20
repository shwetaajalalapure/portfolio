import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Simple admin login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // For demo purposes - replace with proper authentication
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign(
      { id: 1, username: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router; 