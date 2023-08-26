const mongoose = require('mongoose')

let db = null

if (db === null) {
  mongoose.connect('mongodb://localhost:27017/tecgurus', { useNewUrlParser: true, useUnifiedTopology: true })
  db = mongoose.connection
}

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Database connected')
})

module.exports = mongoose