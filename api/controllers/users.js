const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res, next) => {
    let { firstName, lastName, email, password } = req.body;
    try {
        let user = await User.create({
            firstName,
            lastName,
            email,
            password: User.hashPassword(password)
        });
        res.json(user);
    } catch( e ) {
        next(e);
    }
});

router.get('/', async (req, res, next) => {
    try {
        let users = await User.findAll();
        res.json(users);
    } catch( e ) {
        next(e);
    }
});

module.exports = router;