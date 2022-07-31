const express = require('express');
const router = express.Router();
const { authJWT, admin } = require('../middleware/authenticator');
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../contollers/userController');

// /api/user
router.route('/')
  .get(authJWT, admin, getAllUsers)
  .post(authJWT, admin, createUser)
  .update(authJWT, admin, updateUser)
  .delete(authJWT, admin, deleteUser)

// /api/user
router.route('/:user_id')
  .get(authJWT, admin, getUser)