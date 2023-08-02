const express = require('express')
const router = express.Router()

// Route default
router.get('/', isAuth, (req, res) => {
    res.send('Secret home page')
})


function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    console.log(`Auth: ${auth}`);
    if (auth === 'password') {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}

module.exports = router