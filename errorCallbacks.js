// Un script que genera errores personalizados
const fs = require('fs');

try {
    fs.readFile('archivo_no_existente.txt', 'utf8' , (err, data) => {
        if (err) {
            console.log(err.name)
            
            const error = new Error('Error al leer el archivo')
            error.status = 404
            throw error
            //throw new Error("Error al leer el archivo: " + err.message)
        }
        let number = parseInt(data);
        if (number === 0) {
          throw new Error("No se puede dividir por cero");
        }
        console.log(number / 0);
      })
} catch (error) {
    console.log(error)
    if (error.status === 404) {
       // Crear archivo
    }
    throw error
}
