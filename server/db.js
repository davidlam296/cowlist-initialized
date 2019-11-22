const Sequelize = require('sequelize');
const database = 'cowlist'
const { user, password } = require('../config/mysql.js');

const sequelize = new Sequelize(database, user, password, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log(`You are connected to the database: ${database}`);
  })
  .catch(err => {
    console.log('Error', err);
  })

const Cows = sequelize.define('cows', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// Cows.sync({force: true});
Cows.sync();

module.exports.Cows = Cows;
