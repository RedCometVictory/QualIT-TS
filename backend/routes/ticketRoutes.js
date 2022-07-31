const express = require('express');
const router = express.Router();
const { authJWT, admin } = require('../middleware/authenticator');
const { getAllTickets, getTicket, createTicket, updateTicket, deleteTicket } = require('../contollers/ticketController');

// /api/ticket
router.route('/')
  .get(authJWT, admin, getAllTickets)
  .post(authJWT, admin, createTicket)
  .update(authJWT, admin, updateTicket)
  .delete(authJWT, admin, deleteTicket)

// /api/ticket
router.route('/:ticket_id')
  .get(authJWT, admin, getTicket)