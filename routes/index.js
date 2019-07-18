// Load dependencies
const express = require('express');
const router = express.Router();

// Load default route
router.get('/', function(req, res, next) {
  res.send('This API is not for public consumption');
});

module.exports = router;