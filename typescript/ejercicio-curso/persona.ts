class Persona {
  constructor(public nombre: string, public apellidos: string) {
    this.nombre = nombre
    this.apellidos = apellidos
  }

  getNombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`
  }

}

export { Persona }