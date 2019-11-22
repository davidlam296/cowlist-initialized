const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cows');
const db = mongoose.connection;

db.on('error', () => {
  console.log('ERROR')
});
db.once('open', () => {
  console.log('Connected to the database!');
});

const cowsSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Cows = mongoose.model('Cows', cowsSchema);

module.exports.Cows = Cows;