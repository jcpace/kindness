const db = require('../config/db.config')
const express = require('express')
const router = express.Router()
const user = require('./Users/index')
const mainRoutes = require('./routes.main')

module.exports = {
  user: user

}

// This is the base exporting file for all entities.
// If needed, you can import from this index file (which itself imports from each individual index file)rather than importing from the individual file
// itself that you need. hopefully this will shorten file paths and allow for easier scaling
