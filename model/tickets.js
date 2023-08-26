const mongoose = require('../database')

const ticketsSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  estado: String,
  comentarios: [{ text: String, fecha: Date }]
})

const Tickets = mongoose.model('tickets', ticketsSchema)

module.exports = Tickets