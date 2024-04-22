// function Persona(nombre, apellidos) {
//   this.nombre = nombre
//   this.apellidos = apellidos

//   // this.getNombreCompleto = function () {
//   //   return `${this.nombre} ${this.apellidos}`
//   // }
// }

// const sara = new Persona('Sara', 'Collins')
// const mike = new Persona('Mike', 'Kozinsky')

// Persona.prototype.getNombreCompleto = function () {
//   return `${this.nombre} ${this.apellidos}`
// }


// console.log(sara)
// console.log(mike)

// console.log(sara.getNombreCompleto())

// sara.getDNI = function () {
//   return '12341234A'
// }

// console.log(sara)
// console.log(mike)

// console.log(mike.__proto__ === Persona.prototype)


function Persona(nombre, apellidos) {
  this._nombre = nombre
  this._apellidos = apellidos
  // let _nombre = nombre
  // let _apellidos = apellidos

  // this.getNombre = function () {
  //   return _nombre
  // }

  // this.setNombre = function (nombre) {
  //   _nombre = nombre
  // }

  // this.getApellidos = function () {
  //   return _apellidos
  // }

  // this.setApellidos = function (apellidos) {
  //   _apellidos = apellidos
  // }

  // this.getNombreCompleto = function () {
  //   return `${this.nombre} ${this.apellidos}`
  // }
}
Persona.prototype.getNombre = function () {
  return this._nombre
}

Persona.prototype.setNombre = function (nombre) {
  this._nombre = nombre
}

Persona.prototype.getApellidos = function () {
  return this._apellidos
}

Persona.prototype.setApellidos = function (apellidos) {
  this._apellidos = apellidos
}

const sara = new Persona('Sara', 'Collins')
const mike = new Persona('Mike', 'Kozinsky')

Persona.prototype.getNombreCompleto = function () {
  return `${this.getNombre()} ${this.getApellidos()}`
  // return `${this.nombre} ${this.apellidos}`
}


console.log(sara)
console.log(mike)

console.log(sara.getNombreCompleto())

sara.getDNI = function () {
  return '12341234A'
}

console.log(sara)
console.log(mike)

console.log(mike.__proto__ === Persona.prototype)