import express from 'express';
import Project from '../models/Project.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [
        ['order', 'ASC'],
        ['createdAt', 'DESC']
      ]
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new project (protected)
router.post('/', auth, async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a project (protected)
router.patch('/:id', auth, async (req, res) => {
  try {
    const [updated] = await Project.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const project = await Project.findByPk(req.params.id);
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a project (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleted = await Project.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Project deleted successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 