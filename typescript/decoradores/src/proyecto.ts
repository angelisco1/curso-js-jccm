import { isAuthenticated, medirPerformance } from "./decorators"

class Proyecto {
  constructor(
    public nombre: string,
    private informacion: string,
  ) { }

  @medirPerformance
  @isAuthenticated
  getInfo(): string {
    return this.informacion
  }
}

type Proyectos = Array<Proyecto>

export {
  Proyecto,
  Proyectos
}