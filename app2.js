function functionAsincrona () {
    setTimeout(() => {
        console.log('Esta es una tarea asincronica')
    }, 3000)
}

function functionSincrona() {
    console.log('Esta es una tarea sincrona')
}

functionAsincrona()
functionSincrona()