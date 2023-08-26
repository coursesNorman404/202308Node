const ticketModel = require('../../model/tickets')

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await ticketModel.find()
    res.json(tickets)
  } catch (err) {
    res.status(500).json({ message : err })
  }
}

exports.createTicket = async (req, res) => {
  const ticket = new ticketModel(req.body)
  console.log(req.body, ticket)
  try {
    await ticket.save()
    res.json(ticket)
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
}

exports.updateTicket = async (req, res) => {
  const id = req.params.id
  const { estado, comentario } = req.body
  try {
    const ticket = await ticketModel.findById(id)
    if (!ticket) {
      return res.status(404).json({
        message: 'El ticket no existe'
      })
    }

    if (estado) {
      ticket.estado = estado
    }

    if (comentario) {
      ticket.comentarios = ticket.comentarios || []
      ticket.comentarios.push({
        text: comentario,
        fecha: new Date()
      })
    }
    await ticket.save()

    res.json(ticket)
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
}
