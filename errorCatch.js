const fs = require('fs').promises;

async function leerArchivo() {
    try {
        const data = await fs.readFile('foo.txt', 'utf-8'); // Lee el archivo 'foo.txt' de manera asíncrona y obtiene los datos
        console.log(data); // Imprime los datos del archivo en la consola
        if (true) {
            throw new Error('Si se pudo leer el archivo'); // Lanza un error personalizado si se cumple una condición
        }
    } catch (error) {
        console.log(error); // Imprime el error capturado en la consola
        const err = new Error('No se puede leer el archivo foo.txt'); // Crea un nuevo objeto Error con un mensaje personalizado
        err.name = 'Error en leer Archivo'; // Asigna un nombre al error personalizado
        err.status = 404; // Agrega una propiedad personalizada al error
        throw err; // Lanza el error personalizado
    }
}

leerArchivo().catch(err => console.log(err)); // Llama a la función leerArchivo y captura cualquier error que ocurra
console.log('Entro'); // Imprime 'Entro' en la consola
