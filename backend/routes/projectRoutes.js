const express = require('express');
const router = express.Router();
const { authJWT, admin } = require('../middleware/authenticator');
const { getAllProjects, getProject, createProject, updateProject, deleteProject } = require('../contollers/projectController');

// /api/project
router.route('/')
  .get(authJWT, admin, getAllProjects)
  .post(authJWT, admin, createProject)
  .update(authJWT, admin, updateProject)
  .delete(authJWT, admin, deleteProject)

// /api/project
router.route('/:project_id')
  .get(authJWT, admin, getProject)