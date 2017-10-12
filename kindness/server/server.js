'use strict'
require('./config/db.config.js')
const express = require('express')
const app = express()
const routes = require('./api/routes.main')
const PORT = process.env.PORT || 8000
const fs = require('fs')
const https = require('https')
const HTTPS_PORT = 1443

// Middleware
require('./config/middleware')(app, express)

app.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies)
})

// HTTPS
let secureServer = https.createServer({
  key: fs.readFileSync('./server/config/private.key'),
  cert: fs.readFileSync('./server/config/certificate.pem')
}, app)
  .listen(HTTPS_PORT, () => {
    console.log('Secure Server listening on port: ' + HTTPS_PORT)
  })

// Routes
app.use('/api', routes)

app.listen(PORT, () => {
  console.log('SERVER listening on port: ', PORT)
})

module.exports = app
