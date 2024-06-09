const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
	database: process.env.AZURE_POSTGRESQL_DATABASE,
	username: process.env.AZURE_POSTGRESQL_USER,
	password: process.env.AZURE_POSTGRESQL_PASSWORD,
	host: process.env.AZURE_POSTGRESQL_HOST,
	port: process.env.AZURE_POSTGRESQL_PORT,
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

const db = {};

db.Sequelize = Sequelize;
db.connection = sequelize;

db.users = require('./user.model.js')(db.connection, db.Sequelize);

module.exports = db;
