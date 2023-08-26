const express = require('express')
const {
  getAllTickets,
  createTicket,
  updateTicket
} = require('../controllers/tickets')
const router = express.Router()

router.get('/', getAllTickets)
router.post('/', createTicket)
router.patch('/:id', updateTicket)

module.exports = router