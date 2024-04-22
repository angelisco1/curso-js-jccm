var nombre = 'Charles'

if (nombre) {
  console.log('Es truthy')
} else {
  console.log('Es falsy')
}

// Valores falsy
var apellidos = ''
var esCorrecto = false
var esNulo = null
var indefinido
var numeroLikes = 0

if (apellidos) {
  console.log('Es truthy')
} else {
  console.error('Es falsy')
}


const listaVacia = []
const objetoVacio = {}

if (objetoVacio) {
  console.log('Es truthy')
} else {
  console.log('Es falsy')
}


const a = 1 == '1'
console.log(a)
const b = 1 === '1'
console.log(b)