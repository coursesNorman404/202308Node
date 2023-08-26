const express = require('express')
const {
  renderUserLoginPage
} = require('../controllers/users')
const router = express.Router()

router.get('/', renderUserLoginPage)

module.exports = router