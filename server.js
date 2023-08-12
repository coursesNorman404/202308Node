const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

const ticketsRouter = require('./tickets')

app.use('/tickets', ticketsRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

