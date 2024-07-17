const { Sequelize } = require('sequelize');

const dbName = 'swift_sender_db'
const dbUser = 'root'
const dbPassword = ''

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
  host: 'localhost',
  dialect:'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize