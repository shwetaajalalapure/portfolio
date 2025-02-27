// Dummy Project model that doesn't use Sequelize
import sequelize from '../config/database.js';

// Define the model using our dummy sequelize implementation
const Project = sequelize.define('Project', {});

export default Project; 