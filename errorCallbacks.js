// Un script que genera errores personalizados
const fs = require('fs');

try {
    fs.readFile('archivo_no_existente.txt', 'utf8' , (err, data) => {
        if (err) {
            console.log(err.name); // Se imprime el nombre del error

            const error = new Error('Error al leer el archivo'); // Se crea un nuevo objeto Error con un mensaje personalizado
            error.status = 404; // Se agrega una propiedad personalizada al objeto Error
            throw error; // Se lanza el error personalizado
            //throw new Error("Error al leer el archivo: " + err.message)
        }
        let number = parseInt(data); // Se convierte el contenido del archivo a un número entero
        if (number === 0) {
          throw new Error("No se puede dividir por cero"); // Se lanza un error personalizado si el número es cero
        }
        console.log(number / 0); // Se intenta dividir el número por cero (generará un error de división por cero)
    })
} catch (error) {
    console.log(error); // Se imprime el error capturado
    if (error.status === 404) {
       // Crear archivo
    }
    throw error; // Se lanza nuevamente el error capturado
}
