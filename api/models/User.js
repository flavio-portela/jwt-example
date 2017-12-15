const connection = require('../database');
const sequelize = require('sequelize');
const bycrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const User = connection.define('user', {
    firstName: {
        type: sequelize.STRING,
        validate: {
            isAlpha: true,
            max: 200
        }
    },
    lastName: {
        type: sequelize.STRING,
        validate: {
            isAlpha: true,
            max: 200
        }
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            max: 200
        }
    },
    password: {
        type: sequelize.STRING,
        validate: {
            min: 8,
            max: 200
        }
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['email']
        }
    ]
});

// Class extra functions
User.hashPassword = function( password ) {
    return bycrypt.hashSync( password, SALT_ROUNDS );
}

// Entities extra functions
User.prototype.checkPassword =  function( password ) {
    return bycrypt.compareSync(password, this.password);
}

// force: true will drop the table if it already exists
//User.sync( { force: true } );

module.exports = User;