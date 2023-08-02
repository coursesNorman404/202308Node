let a = 10; // Se declara la variable a y se le asigna el valor 10
let b = 20; // Se declara la variable b y se le asigna el valor 20
let c; // Se declara la variable c sin asignarle un valor inicial

function suma() {
    c = a + b; // Se asigna a la variable c la suma de a y b
    return c; // Se devuelve el valor de c
}

function divide () {
    let d; // Se declara la variable d sin asignarle un valor inicial
    d = a / b; // Se asigna a la variable d la división de a entre b
    return d; // Se devuelve el valor de d
}

console.log(suma()); // Se imprime en la consola el resultado de la función suma
console.log(divide()); // Se imprime en la consola el resultado de la función divide
