const Sequelize = require('sequelize')

// Please create a credential.json file with your username and password for your cloud DB.
// Refer to sampleCredentials.json
const creds = require('./credentials')

const DBURL = `postgres://${creds.username}:${creds.password}@stampy.db.elephantsql.com:5432/${creds.username}`

const DBConnection = new Sequelize(DBURL)

// Connection testing

DBConnection
    .authenticate()
    .then(() => {
      console.log('DB connection successful')
    })
    .catch((err) => {
      console.log('DB connection ERROR: ', err)
    })

module.exports = DBConnection
