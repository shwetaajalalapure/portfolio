// Dummy Contact model that doesn't use Sequelize
import sequelize from '../config/database.js';

// Define the model using our dummy sequelize implementation
const Contact = sequelize.define('Contact', {});

export default Contact; 