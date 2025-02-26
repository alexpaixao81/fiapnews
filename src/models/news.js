const { DataTypes } = require('sequelize');
const sequelize = require('../services/supabaseService'); 

const News = sequelize.define('News', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  short_description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'News',
  timestamps: false
});

module.exports = News;

