function Persona(nombre, apellidos) {
  this.nombre = nombre
  this.apellidos = apellidos
}

const sara = new Persona('Sara', 'Collins')
const mike = new Persona('Mike', 'Kozinsky')

Persona.prototype.getNombreCompleto = function () {
  return `${this.getNombre()} ${this.getApellidos()}`
  // return `${this.nombre} ${this.apellidos}`
}


function Alumno(nombre, apellidos, curso) {
  Persona.call(this, nombre, apellidos)

  this.curso = curso
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