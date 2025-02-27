// Dummy Skill model that doesn't use Sequelize
import sequelize from '../config/database.js';

// Define the model using our dummy sequelize implementation
const Skill = sequelize.define('Skill', {});

export default Skill; 