import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('portfolio', 'root', '2025', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  port: 3306
});

// Initialize database and test connection
const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection has been established successfully.');
    
    // Sync all models
    await sequelize.sync();
    console.log('Database tables synced successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    throw err;
  }
};

// Initialize the database
initDatabase();

export default sequelize; 