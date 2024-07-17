const sequelize = require('../db.connect')
const { Sequelize, DataTypes } = require('sequelize');
const Email = require('./emails')


const User = sequelize.define('user', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email:DataTypes.TEXT,
    password: DataTypes.TEXT
  });
  
  (async () => {
    await sequelize.sync();
  })();

User.hasMany(Email, { foreignKey: 'senderId' });
User.hasMany(Email, { foreignKey: 'receiverId' });
Email.belongsTo(User, { as: 'Sender', foreignKey: 'senderId' });
Email.belongsTo(User, { as: 'Receiver', foreignKey: 'receiverId' });

module.exports = User