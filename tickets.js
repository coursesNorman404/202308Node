const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Aquí se listarán todos los tickets. desde tickets.js');
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    res.send('Se ha creado un nuevo ticket. desde tickets.js');
})

// Ruta para obtener un ticket específico por su ID
app.get('/:id', (req, res) => {
res.send(`Mostrando detalles del ticket con ID ${req.params.id}`);
});


// Ruta para actualizar un ticket específico por su ID
app.put('/:id', (req, res) => {
res.send(`El ticket con ID ${req.params.id} ha sido actualizado.`);
});

// Ruta para eliminar un ticket específico por su ID
app.delete('/:id', (req, res) => {
res.send(`El ticket con ID ${req.params.id} ha sido eliminado.`);
});

module.exports = router
