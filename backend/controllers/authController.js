require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const pool = require('../config/db');
const {  } = require('../middleware/jwtGenerator');
const { ErrorHandler } = require("../middleware/errorHandler");

exports.authDemo = () => {
  try {
    
  } catch (err) {
    throw new ErrorHandler(err.statusCode, "Failed to log into Demo account.")
  }
};

exports.login = async (req, res, next) => {
  try {
    
  } catch (err) {
    throw new ErrorHandler(err.statusCode, "Failed to login.");
  }
};

exports.register = async (req, res, next) => {
  try {
    
  } catch (err) {
    throw new ErrorHandler(err.statusCode, "Failure to register.")
  }
};

exports.logout = async (req, res, next) => {
  try {
    
  } catch (err) {
    throw new ErrorHandler(err.statusCode, "Failure to logout of account.")
  }
};