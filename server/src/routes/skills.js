import express from 'express';
import Skill from '../models/Skill.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.findAll({
      order: [
        ['category', 'ASC'],
        ['order', 'ASC']
      ]
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new skill (protected)
router.post('/', auth, async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a skill (protected)
router.patch('/:id', auth, async (req, res) => {
  try {
    const [updated] = await Skill.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const skill = await Skill.findByPk(req.params.id);
      res.json(skill);
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a skill (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleted = await Skill.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Skill deleted successfully' });
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 