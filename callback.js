function cogerCamiseta(callback) {
    setTimeout(() => {
        console.log('Cogí la camiseta.');
        callback();
    }, 1000);
}

function ponerseCamiseta(callback) {
    setTimeout(() => {
        console.log('Me puse la camiseta.');
        callback();
    }, 1000);
}

function atarseCordones(callback) {
    setTimeout(() => {
        console.log('Me até los cordones.');
        callback();
    }, 1000);
}

function atarseZapatos() {
    atarseCordones(() => {
        console.log('Listo para jugar fútbol!');
    });
}

function vestirse() {
    ponerseCamiseta(atarseZapatos);
}

// Inicio del encadenamiento de devoluciones de llamada
cogerCamiseta(vestirse);