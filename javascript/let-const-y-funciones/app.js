const nombre3 = 'Sara'
// nombre3 = 'Sandra'

var nombre1 = 'Charles'
let nombre2 = 'Ángel'
console.log(1, nombre1, nombre2)

if (true) {
  var nombre1 = 'Charly'
  let nombre2 = 'Angel2'
  console.log(2, nombre1, nombre2)
}

console.log(3, nombre1, nombre2)


function getNumDoble(num) {
  return num * 2
}

const getNumTriple = function (num) {
  return num * 3
}

// Arrow functions

// Si la función tiene 1 solo parámetro los paréntesis son opcionales
const getNumDoble2 = (num) => {
  return num * 2
}
const getNumDoble3 = num => {
  return num * 2
}

// Si la función no tiene parámetros los paréntesis se quedan
const get3 = () => {
  return 3
}

// Si la función tiene 2 o más parámetros los paréntesis se quedan
const sumaNums = (n1, n2) => {
  return n1 + n2
}

const getNumDoble4 = (num) => num * 2


const numeros = [1, 2, 3, 4]

// Map -> transforma un array en otro
const numerosDobles = numeros.map(getNumDoble4)
console.log(numerosDobles)


// Filter -> filtra los valores del array y se queda con los que cumplen una condición
// const numerosPares = numeros.filter(num => num % 2 === 0)
const numerosPares = numeros.filter(num => {
  return num % 2 === 0
})
console.log(numerosPares)


// Reduce -> convierte todo un array a un solo valor
const sumaTotal = numeros.reduce((acc, num, index) => {
  console.log('Iteración ' + index, acc, num)
  return acc + num
}, 0)
console.log(sumaTotal)


// Every -> devuelve true si todos los valores de un array cumplen una condición
const listaEmailsFiltrados = ['angel@gmail.com', 'jorge@hotmail.com', 'maria@outlook.es']
const emailUsuarios = ['angel.villalba@gmail.com', 'charles@hotmail.com', 'maria@outlook.es', 'angel@gmail.com']
const coincidenTodosConLosFiltrados = emailUsuarios.every(email => listaEmailsFiltrados.includes(email))
console.log(coincidenTodosConLosFiltrados)

// Some -> devuelve true si alguno de los valores de un array cumplen una condición
const coincideAlgunoConLosFiltrados = emailUsuarios.some(email => listaEmailsFiltrados.includes(email))
console.log(coincideAlgunoConLosFiltrados)



const serie1 = {
  titulo: 'Yellowstone',
  numTemporadas: 3,
  episodios: 30,
  episodiosVistos: 4,
  episodiosPorVer: function () {
    return this.episodios - this.episodiosVistos
  },
  verEpisodio: function () {
    if (this.episodiosVistos < this.episodios) {
      this.episodiosVistos++
    }
  }
}

const serie2 = {
  titulo: 'House of the Dragon',
  numTemporadas: 1,
  episodios: 12,
  episodiosVistos: 10,
  episodiosPorVer: function () {
    return this.episodios - this.episodiosVistos
  },
  verEpisodio: function () {
    if (this.episodiosVistos < this.episodios) {
      this.episodiosVistos++
    }
  }
}

console.log(serie1.titulo)
const prop = 'titulo'
console.log(serie2[prop])

console.log(serie1.episodiosPorVer())
serie1.verEpisodio()
console.log(serie1.episodiosPorVer())

// Crear un array con las dos series
const listaSeries = [serie1, serie2]

// Mostrar cuantos capitulos en total nos quedan por ver de todas las series
const episodiosPorVerTotales = listaSeries.reduce((acc, serie) => {
  return acc + serie.episodiosPorVer()
}, 0)
console.log(episodiosPorVerTotales)

// Obtener la lista de títulos de las series
const titulosSeries = listaSeries.map(serie => serie.titulo)
console.log(titulosSeries)

// Comprobar que no hemos terminado de ver ninguna serie
const seriesSinTerminar = listaSeries.every(serie => {
  return serie.episodiosPorVer() > 0
})
console.log(seriesSinTerminar)



// Rest params -> ...nums -> todo lo que llega lo mete en la lista de nums
// function getInfoNumeroLoteria(tituloSorteo, n1, n2, n3, n4, n5, n6) {
function getInfoNumeroLoteria(tituloSorteo, ...nums) {
  // return 'Tu jugada para la ' + tituloSorteo + ' es: ' + n1 + ', ' + n2
  return `Tu jugada para la ${tituloSorteo} es: ${nums.join(', ')}`
}
console.log(getInfoNumeroLoteria('Bonoloto', 1, 17, 23, 28, 41))

// Spread Operator -> ...persona y ...datosExtra -> lo que hay en los objetos de persona y datosExtra los extrae cada uno por su lado
const persona = {
  nombre: 'Charly',
  apellidos: 'Falco'
}

const datosExtra = {
  dni: '00000000T',
  fechaNacimiento: new Date(2000, 1, 1)
}

const usuario = {
  ...persona,
  ...datosExtra
}

console.log(usuario)

const usuario2 = { ...usuario }
usuario2.nombre = 'Mike'

console.log(usuario)
console.log(usuario2)