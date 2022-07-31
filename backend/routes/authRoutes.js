const express = require('express');
const router = express.Router();
const { authJWT, admin } = require('../middleware/authenticator');
const { authDemo, login, register} = require('../controllers/authController');

// /api/auth
router.post('/demo', authJWT, admin, authDemo);
router.post('/login', authJWT, admin, login);
router.post('/register', authJWT, admin, register);
router.post('/logout', authJWT, admin, register);