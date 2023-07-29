const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { v4: uuidv4 } = require('uuid');

// Función para crear una nueva nota con un ID único
const createNote = (message) => {
  return {
    id: uuidv4(),
    message,
  };
}

// Función para leer las notas existentes
const readNotes = () => {
  try {
    const data = fs.readFileSync('notes.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Función para escribir las notas
const writeNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
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
      const notes = readNotes();
      const note = createNote(argv.message);
      notes.push(note);
      writeNotes(notes);
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
      const notes = readNotes();
      const filteredNotes = notes.filter(note => note.id !== argv.id);
      writeNotes(filteredNotes);
      console.log('Nota eliminada.');
    }
  )
  .command(
    'read-notes',
    'Lee todas las notas',
    () => {},
    () => {
      const notes = readNotes();
      notes.forEach(note => {
        console.log(`${note.id}: ${note.message}`);
      });
    }
  )
  .argv;