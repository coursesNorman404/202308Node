function functionAsincrona() {
    setTimeout(() => {
        console.log('Esta es una tarea asincrónica'); // Se imprime en la consola el mensaje después de un retraso de 3000 milisegundos
    }, 3000);
}

function functionSincrona() {
    console.log('Esta es una tarea sincrónica'); // Se imprime en la consola el mensaje inmediatamente
}

functionAsincrona(); // Se invoca la función asincrónica
functionSincrona(); // Se invoca la función sincrónica
