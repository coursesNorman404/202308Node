const ticketModel = require('../../model/tickets')

exports.renderTicketsPage = async (req, res) => {
  try {
    const tickets = await ticketModel.find()
    res.render('tickets', { tickets})
  } catch (err) {
    res.status(500).send('Ocurrió un error')
  }
}

exports.renderTicketDetailsPage = async (req, res) => {
  const id = req.params.id
  try {
    const ticket = await ticketModel.findById(id)
    res.render('ticket-details', { ticket })
  } catch (err) {
    res.status(500).send('Ocurrió un error')
  }
}