const incrementar = num => num + 1
const sumar = (a, b) => a + b

const sumarYRestart = (a, b, c) => {
    const suma = a + b
    return suma - c
}

console.log(incrementar(4))
console.log(sumar(2, 2))
console.log(sumarYRestart(2, 3, 1))


const objeto = {
    valor: 5,
    incrementar: function() {
        return this.valor + 1
    },
    incrementarFlecah: () => {
      console.log('Objeto',this)
        return this.valor + 1 // Aqui el resultado puede variar dependiento del contexto.
    }
}
console.log(objeto.incrementar())
console.log(objeto.incrementarFlecah())

const array = [1, 2, 3, 4, 5]
const arrayIncrementado = array.map(num => num + 1)

console.log(arrayIncrementado)

class Auto  {
  constructor(marca, year) {
    this.marca = marca;
    this.year = year;
  }
  imprimeDatos = () => {
    console.log('Auto', this)
    console.log(`Marca: ${this.marca}, Año😒 ${this.year}`);
    console.log(objeto.incrementarFlecah())
  };
}; 

const auto = new Auto('Toyota', 2022);
auto.imprimeDatos()