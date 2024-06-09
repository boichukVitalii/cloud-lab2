module.exports = {
	HOST: 'localhost',
	USER: 'adminadmin',
	PASSWORD: 'adminadmin',
	DB: 'testdb',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
