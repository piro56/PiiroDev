const express = require('express')
const router = express.Router()

// Route default
router.get('/', (req, res) => {
    res.send('Secret home page')
})

module.exports = router