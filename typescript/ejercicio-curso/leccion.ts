import { Contenido } from "./contenido"


class Leccion extends Contenido {
  constructor(
    public id: string,
    public titulo: string,
    public duracion: number
  ) {
    super(id, titulo)
    this.duracion = duracion
  }

  getDuracion() {
    return this.duracion
  }
}

export { Leccion }