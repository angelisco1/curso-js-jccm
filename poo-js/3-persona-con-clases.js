class Persona {
  // Propiedades privadas
  #nombre
  #apellidos

  constructor(nombre, apellidos) {
    this.#nombre = nombre
    this.#apellidos = apellidos
  }

  get nombre() {
    console.log('Se ejecuta el getter de nombre')
    return this.#nombre
  }

  set nombre(nombre) {
    console.log('Se ejecuta el setter de nombre')
    this.#nombre = nombre
  }

  get apellidos() {
    return this.#apellidos
  }

  set apellidos(apellidos) {
    this.#apellidos = apellidos
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellidos}`
  }

}

const sara = new Persona('Sara', 'Collins')
const mike = new Persona('Mike', 'Kozinsky')

console.log(sara)
console.log(mike)

// Llama al get nombre
console.log(sara.nombre)

// Llama al set nombre
sara.nombre = 'Sandra'

// Esto da error porque #nombre es privado y solo se puede usar desde dentro de la clase
// console.log(sara.#nombre)