import { Contenido } from "./contenido"
import { Pregunta } from "./pregunta"


class Evaluacion extends Contenido {
  public preguntas: Array<Pregunta> = []


  constructor(public id: string, public titulo: string) {
    super(id, titulo)
  }

  agregarPregunta(pregunta: Pregunta): void {
    this.preguntas.push(pregunta)
  }

  calificarEvaluacion() {
    // TODO:
  }
}

export { Evaluacion }