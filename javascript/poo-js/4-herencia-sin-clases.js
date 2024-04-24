function Persona(nombre, apellidos) {
  this.nombre = nombre
  this.apellidos = apellidos
}

const sara = new Persona('Sara', 'Collins')

Persona.prototype.getNombreCompleto = function () {
  return `${this.nombre} ${this.apellidos}`
}


function Alumno(nombre, apellidos, curso) {
  Persona.call(this, nombre, apellidos)

  this.curso = curso
}

Alumno.prototype = Object.create(Persona.prototype)
Alumno.prototype.constructor = Alumno

Alumno.prototype.getCurso = function () {
  return this.curso
}

const mike = new Alumno('Mike', 'Kozinsky', 'JavaScript')

console.log(sara)
console.log(mike)

console.log(sara.getNombreCompleto())
console.log(mike.getNombreCompleto())

sara.getDNI = function () {
  return '12341234A'
}

console.log(sara)
console.log(mike)

console.log(mike.__proto__ === Persona.prototype)