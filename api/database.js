const Sequelize = require('sequelize');

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_SQUEMA } = process.env;

const connection = new Sequelize(DB_SQUEMA, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

connection
    .authenticate()
    .then( () => {
        console.log('Connection to database has been established successfully');
    })
    .catch( err => {
        console.log('Unable to connect to the database', err);
    });

module.exports = connection;