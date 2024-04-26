import { Contenido } from "./contenido";

class Modulo {
  public contenidos: Array<Contenido> = []

  constructor(public id: string, public titulo: string) {
    this.id = id;
    this.titulo = titulo;
  }

  agregarContenido(contenido: Contenido): void {
    if (this.contenidos.some(c => c.id === contenido.id)) {
      console.error('Este contenido ya está añadido')
      return
    }
    this.contenidos.push(contenido)
  }

  getDuracionModulo(): number {
    return this.contenidos
      .reduce((acc, contenido) => {
        return acc + contenido.getDuracion()
      }, 0)
  }

  getInformacionModulo(): string {
    return `
      - ${this.titulo}
        ${this.contenidos.map(c => '-- ' + c.titulo).join('\n\t')}
    `
  }
}

export { Modulo }