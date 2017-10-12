const Sequelize = require('sequelize')
const db = require('../../config/db.config.js')

const User = db.define('user', {
  isVendor: {
    type: Sequelize.INTEGER
  },
  profile_image_url: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  userName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.INTEGER
  },
  houseNumber: {
    type: Sequelize.INTEGER
  },
  streetName: {
    type: Sequelize.STRING
  },
  unitType: {
    type: Sequelize.STRING
  },
  unitNumber: {
    type: Sequelize.INTEGER
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.INTEGER
  },
  latitude: {
    type: Sequelize.STRING
  },
  longitude: {
    type: Sequelize.STRING
  }
})
  // relationships

// User.hasMany(Review, {foreignKey: 'userId'})

User.sync().then(() => {
  console.log('USER table successfully created.')
})

module.exports = User
