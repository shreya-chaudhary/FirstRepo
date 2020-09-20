const express = require('express');
const router = express.Router();
const fileop = require('./filerouter');

router.use('/api/user', fileop);

module.exports = router;