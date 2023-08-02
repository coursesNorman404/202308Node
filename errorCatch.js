const fs = require('fs').promises

async function leerArchivo() {
    try {
        const data = await fs.readFile('foo.txt', 'utf-8')
        console.log(data)
        if (true) {
            throw new Error('Si se pudo leer el archivo')
        }
    } catch (error) {
        console.log(error)
        const err = new Error('No se puede leer el archivo foo.txt')
        err.name = 'Error en leer Archivo'
        err.status = 404
        throw err
    }
}
leerArchivo().catch(err => console.log(err))
console.log('Entro')
