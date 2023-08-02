const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { v4: uuidv4 } = require('uuid');

// Función para crear una nueva nota con un ID único
const createNote = (message) => {
  return {
    id: uuidv4(), // Genera un ID único utilizando la función uuidv4
    message,
  };
}

// Función para leer las notas existentes
const readNotes = () => {
  try {
    const data = fs.readFileSync('notes.json', 'utf8'); // Lee el archivo 'notes.json' y obtiene los datos
    return JSON.parse(data); // Parsea los datos en formato JSON y los devuelve
  } catch (err) {
    return []; // Si hay un error al leer el archivo, devuelve un array vacío
  }
}

// Función para escribir las notas
const writeNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2)); // Escribe los datos en formato JSON en el archivo 'notes.json'
}

// Configuración de yargs para manejar argumentos de la línea de comandos
yargs(hideBin(process.argv))
  .command(
    'add-note <message>',
    'Agrega una nota',
    (yargs) => {
      yargs.positional('message', {
        describe: 'El contenido de la nota',
        type: 'string',
      });
    },
    (argv) => {
      const notes = readNotes(); // Obtiene las notas existentes
      const note = createNote(argv.message); // Crea una nueva nota con el mensaje proporcionado
      notes.push(note); // Agrega la nota al array de notas existentes
      writeNotes(notes); // Guarda las notas en el archivo 'notes.json'
      console.log('Nota agregada.');
    }
  )
  .command(
    'remove-note <id>',
    'Elimina una nota',
    (yargs) => {
      yargs.positional('id', {
        describe: 'El ID de la nota a eliminar',
        type: 'string',
      });
    },
    (argv) => {
      const notes = readNotes(); // Obtiene las notas existentes
      const filteredNotes = notes.filter(note => note.id !== argv.id); // Filtra las notas para excluir la nota con el ID proporcionado
      writeNotes(filteredNotes); // Guarda las notas filtradas en el archivo 'notes.json'
      console.log('Nota eliminada.');
    }
  )
  .command(
    'read-notes',
    'Lee todas las notas',
    () => {},
    () => {
      const notes = readNotes(); // Obtiene las notas existentes
      notes.forEach(note => {
        console.log(`${note.id}: ${note.message}`); // Imprime el ID y el mensaje de cada nota
      });
    }
  )
  .argv;
