const express = require('express');
const router = express.Router();

// This routes require authentication
router.use(require('../middlewares/auth'));

// Get all the user notes
router.get('/', (req, res) => {
    let user = req.user;
    res.send(`Here are the notes for ${user.firstName} :)`);
});

module.exports = router;