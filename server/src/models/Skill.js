import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Skill = sequelize.define('Skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.ENUM('frontend', 'backend', 'database', 'devops', 'other'),
    allowNull: false
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false
  },
  proficiency: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 100
    }
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true
});

export default Skill; 