const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')

module.exports = (app, express) => {
  app.options('*', cors())
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(cookieParser())

  //app.use(express.static(path.join(__dirname, '../../src')))
}
