class Respuesta {
  constructor(public id: string, public texto: string, public esCorrecta: boolean) {
    this.id = id
    this.texto = texto
    this.esCorrecta = esCorrecta
  }
}

type Respuestas = Array<Respuesta>

export { Respuesta, Respuestas }