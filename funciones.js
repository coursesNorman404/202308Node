// Función para incrementar un número en 1
const incrementar = num => num + 1;

// Función para sumar dos números
const sumar = (a, b) => a + b;

// Función para sumar dos números y restar un tercero
const sumarYRestart = (a, b, c) => {
  const suma = a + b;
  return suma - c;
};

// Objeto con valor y métodos
const objeto = {
  valor: 5,
  // Método para incrementar el valor en 1
  incrementar() {
    return this.valor + 1;
  },
  // Método para incrementar el valor en 1 usando una función de flecha
  incrementarFlecah: () => {
    console.log('Objeto', this);
    return this.valor + 1; // Aquí el resultado puede variar dependiendo del contexto.
  },
};

// Array de números
const array = [1, 2, 3, 4, 5];
// Incrementa cada elemento del array en 1
const arrayIncrementado = array.map(num => num + 1);

// Clase Auto
class Auto {
  constructor(marca, year) {
    this.marca = marca;
    this.year = year;
  }

  // Método para imprimir los datos del auto
  imprimeDatos() {
    console.log('Auto', this);
    console.log(`Marca: ${this.marca}, Año: ${this.year}`);
    console.log(objeto.incrementarFlecah());
  }
}

// Instancia de Auto
const auto = new Auto('Toyota', 2022);
auto.imprimeDatos();

// Ejecución de las funciones y log de resultados
console.log(incrementar(4));
console.log(sumar(2, 2));
console.log(sumarYRestart(2, 3, 1));
console.log(objeto.incrementar());
console.log(objeto.incrementarFlecah());
console.log(arrayIncrementado);
