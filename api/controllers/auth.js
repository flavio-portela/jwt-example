const User = require('../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let isPasswordCorrect = false;
    let token;
    
    // Try to find the user with the given email
    let user = await User.findOne({ where: { email } });

    // Check if we found the user with the given email
    if (!user) {
        res.status(404);
        return res.json({
            message: `We could not find a user with the email: ${email}`
        });
    }

    // If the user exists, now we need to validate that this is the correct password
    isPasswordCorrect = user.checkPassword(password);

    if (isPasswordCorrect) {
        // Create a JWT with the user object as payload and send it on the response
        token = jwt.sign(JSON.stringify(user), process.env.PRIVATE_KEY);
        return res.json({ token });
    }

    res.status(400);
    return res.send('The credentias are invalid');
});

module.exports = router;