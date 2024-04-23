const Contenido = require('./contenido')

class Evaluacion extends Contenido {
  constructor(id, titulo) {
    super(id, titulo)

    this.preguntas = []
  }

  agregarPregunta(pregunta) {
    this.preguntas.push(pregunta)
  }

  calificarEvaluacion() {
    // TODO:
  }
}

module.exports = Evaluacion