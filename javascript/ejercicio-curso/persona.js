class Persona {
  constructor(nombre, apellidos) {
    this.nombre = nombre
    this.apellidos = apellidos
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellidos}`
  }

}

module.exports = Persona