const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get the JWT from the request headers
    let token = req.get('x-reference-token');
    try {
        // Verify the JWT token and if its valida add the payload to the request
        // so it can be used by subsequent requests
        var user = jwt.verify(token, process.env.PRIVATE_KEY);
        req.user = user;
    } catch(e) {
        // If we couldn't verify the token send a 403 status
        res.status(403);
        res.send('You shall not pass!!!');
    }
    next();
}