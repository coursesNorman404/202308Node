const express = require('express')
const {
  renderTicketsPage,
  renderTicketDetailsPage
} = require('../controllers/tickets')
const router = express.Router()

router.get('/', renderTicketsPage)
router.get('/:id', renderTicketDetailsPage)

module.exports = router