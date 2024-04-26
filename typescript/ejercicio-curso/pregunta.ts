import { Respuestas } from "./respuesta"

class Pregunta {
  constructor(
    public id: string,
    public texto: string,
    public respuestas: Respuestas
  ) { }
}

export { Pregunta }