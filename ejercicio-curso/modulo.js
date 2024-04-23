class Modulo {
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;

    this.contenidos = []
  }

  agregarContenido(contenido) {
    if (this.contenidos.some(c => c.id === contenido.id)) {
      console.error('Este contenido ya está añadido')
      return
    }
    this.contenidos.push(contenido)
  }

  getDuracionModulo() {
    return this.contenidos
      .filter(c => c.duracion)
      .reduce((acc, contenido) => {
        return acc + contenido.duracion
      }, 0)
  }

  getInformacionModulo() {
    return `
      - ${this.titulo}
        ${this.contenidos.map(c => '-- ' + c.titulo).join('\n\t')}
    `
  }
}

module.exports = Modulo