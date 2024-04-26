import { Matricula } from './matricula'
import { Modulo } from './modulo'
import { Persona } from './persona'

class Curso {

  public modulos: Array<Modulo> = []
  public matriculas: Array<Matricula> = []

  /**
   *
   * @param {string} id
   * @param {string} titulo titulo del curso
   * @param {Persona} profesor profesor que imparte el curso
   * @param {number} precio precio que cuesta el curso
   */
  constructor(
    public id: string,
    public titulo: string,
    public profesor: Persona,
    public precio: number
  ) {
  }

  getInformacionCurso(): string {
    return `
      ${this.titulo}
      ---------------------------------
      Profesor: ${this.profesor.getNombreCompleto()}
      Precio: ${this.precio}€
      Duración: ${this.getDuracionCurso()}min
      Alumnos matriculados: ${this.matriculas.length}

      Contenido:
      ${this.modulos.map(m => m.getInformacionModulo()).join('')}
    `
  }

  getDuracionCurso(): number {
    return this.modulos
      .map(m => m.getDuracionModulo())
      .reduce((acc, duracion) => acc + duracion, 0)
  }

  agregarModulo(modulo: Modulo): void {
    if (this.modulos.some(m => m.id === modulo.id)) {
      console.error('Este módulo ya está añadido')
      return
    }
    this.modulos.push(modulo)
  }

  matricularAlumno(id: string, usuario: Persona) {
    const matricula = new Matricula(id, usuario)
    this.matriculas.push(matricula)
  }
}

export { Curso }