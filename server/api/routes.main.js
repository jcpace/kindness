const express = require('express')
const router = express.Router()
const mainRouter = require('./index')

router.use('/user', mainRouter.user.userRoute)

module.exports = router
