const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

const db = {};

db.Sequelize = Sequelize;
db.connection = sequelize;

db.users = require('./user.model.js')(db.connection, db.Sequelize);

module.exports = db;
