class Curso {
  /**
   *
   * @param {string} id
   * @param {string} titulo titulo del curso
   * @param {Persona} profesor profesor que imparte el curso
   * @param {number} precio precio que cuesta el curso
   */
  constructor(id, titulo, profesor, precio) {
    this.id = id;
    this.titulo = titulo
    this.profesor = profesor
    this.precio = precio

    this.modulos = []
  }

  getInformacionCurso() {
    return `
      ${this.titulo}
      ---------------------------------
      Profesor: ${this.profesor.getNombreCompleto()}
      Precio: ${this.precio}€
      Duración: ${this.getDuracionCurso()}min

      Contenido:
      ${this.modulos.map(m => m.getInformacionModulo()).join('')}
    `
  }

  getDuracionCurso() {
    return this.modulos
      .map(m => m.getDuracionModulo())
      .reduce((acc, duracion) => acc + duracion, 0)
  }

  agregarModulo(modulo) {
    if (this.modulos.some(m => m.id === modulo.id)) {
      console.error('Este módulo ya está añadido')
      return
    }
    this.modulos.push(modulo)
  }
}

module.exports = Curso