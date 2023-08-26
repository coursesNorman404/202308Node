alert('Hola')

function submitForm () {
  fetch('/api/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: this.titulo,
      descripcion: this.descripcion,
      estado: this.estado
    })
  })
  .then(res => res.json())
  .then(data => {
    this.tickets.push(data)
    this.showModal = false
  })
}