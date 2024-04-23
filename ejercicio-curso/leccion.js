const Contenido = require('./contenido')

class Leccion extends Contenido {
  constructor(id, titulo, duracion) {
    super(id, titulo)
    this.duracion = duracion
  }
}

module.exports = Leccion