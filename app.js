



// // Ejemplo de pila de llamadas
// function primeraFuncion () {
//     console.log('Primera funcion')
// }

// function segundoFuncion () {
//     primeraFuncion()
//     console.log('Segunda funcion')
// }

// segundoFuncion()



// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promesa resuelta')
//     }, 1000)

// })

// promesa.then(console.log)
// .catch(err => {
//     console.log(err)
// })


// console.log('Incio')

// let count = 0
// let intervalId = setInterval(() => {
//   console.log('Esto se ejecuta cada segundo')
//   count++
//   if (count === 5) {
//     clearInterval(intervalId)
//   }
// }, 1000)

// console.log('Fin')

// const fs = require('fs')

// console.log('Incia la lectura de un archivo...')

// fs.readFile('foo.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err.name)
//     }
//     console.log('Datos del archivo: ' + data)
// })

// console.log('Otrs tareas se pueden realizar aqui...')

// console.log('Inicio')
// setTimeout(() => {
//     console.log('Esta es una tarea asincrónica'); // Se imprime en la consola el mensaje después de un retraso de 3000 milisegundos
// }, 1000)
// console.log('Fin')

// console.log('Inicio')

// let sum = 0
// for (let i = 0; i < 100000000000; i++) {
//     sum += i
// }
// console.log(sum)
// console.log('Fin')