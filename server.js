const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

const ticketRouterApi = require('./api/routes/tickets')
const userRouterApi = require('./api/routes/users')

const ticketRouterView = require('./view/routes/tickets')
const userRouterView = require('./view/routes/users')

app.use(express.json())
app.use(express.static('public'));

app.use('/api/tickets', ticketRouterApi)
app.use('/api/users', userRouterApi)
app.use('/tickets', ticketRouterView)
app.use('/users', userRouterView)

app.get('/', (req, res) => {
  res.render('index')
})

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})
app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
