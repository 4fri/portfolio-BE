const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
const { getProfile } = require('../controllers/profile.controller');

router.get('/', authenticateToken, getProfile);

module.exports = router;
