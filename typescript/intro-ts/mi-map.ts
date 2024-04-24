// Crear una clase que funcione como un Map generico (objeto clave/valor). • Tiene que tener las siguientes funcionalidades:
// ◦ Añadir un nuevo elemento
// ◦ Obtener un elemento
// ◦ Comprobar si existe un elemento
// ◦ Vaciar la lista
// ◦ Mostrar los items que hay en el Map


class MiMap<K, T> {
  // TODO: mirar el tipo de obj
  obj: any = {}


  set(key: K, valor: T) {
    this.obj[key] = valor
  }

  get(key: K): T {
    return this.obj[key]
  }

  has(key: K): boolean {
    return Object.keys(this.obj).some(k => k === key)
  }

  clear(): void {
    this.obj = {}
  }

  show(): void {
    Object.entries(this.obj).forEach((entry) => {
      console.log(`${entry[0]}: ${JSON.stringify(entry[1])}`)
    })
  }

}

// export { MiMap }
export default MiMap
