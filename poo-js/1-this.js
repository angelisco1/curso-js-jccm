// window.nombre = 'Paco'

const persona = {
  nombre: 'Charly',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    console.log('Dentro de getNombreCompleto: ', this)

    // var self = this
    // const muestraDatos = function () {
    //   console.log('Dentro de muestraDatos: ', this)
    //   console.log(this.nombre)

    //   console.log('Dentro de muestraDatos: ', self)
    //   console.log(self.nombre)
    // }
    const muestraDatos = () => {
      console.log('Dentro de muestraDatos: ', this)
      console.log(this.nombre)
    }
    muestraDatos()

    return `${this.nombre} ${this.apellidos}`
  }
}

console.log(persona.getNombreCompleto())