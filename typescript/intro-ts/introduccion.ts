// import { MiMap } from './mi-map'
import MiMap2 from './mi-map'

const str: string = 'Hola mundo'
console.log(str)

let num: number = 2

let cualquierValor: any;
cualquierValor = true;
cualquierValor = 'Cualquier valor';
cualquierValor = 11;

type strONum = string | number
type edad = number

const edadPersona: edad = 29

// let timestamp: string | number = Date.now()
let timestamp: strONum = Date.now()
timestamp = getTimestamp()

function getTimestamp(param1?: number, param2?: boolean): string {
  return Date.now() + ''
}

const telefono: [string, number] = ['+34', 666777888]
console.log(telefono[0] + ' ' + telefono[1])


function doble(valor: number): number;
function doble(valor: string): string;

function doble(valor: any): string | number | null {
  const tipo = typeof valor
  if (tipo === 'number') {
    return valor * 2
  } else if (tipo === 'string') {
    return valor + valor
  } else {
    return null
  }
}

console.log(doble(2))
console.log(doble('hola'))

const nums: Array<number> = [1, 2, 3, 4]
const codigos: string[] = ['es-ES', 'en-GB', 'fr-FR', 'en-US']


type Pelicula = {
  titulo: string,
  año: number,
  estrenada: boolean,
  genero: string
  // getInfo: () => string
}

const generos = ['accion', 'comedia', 'drama']


function filtrar(peliculas: Array<Pelicula>, filtro: string): Array<Pelicula>;
function filtrar(peliculas: Array<Pelicula>, filtro: number): Array<Pelicula>;
function filtrar(peliculas: Array<Pelicula>, filtro: boolean): Array<Pelicula>;

function filtrar(peliculas: Array<Pelicula>, filtro: any): Array<Pelicula> {
  const tipo = typeof filtro
  if (tipo === 'number') {
    return peliculas.filter(p => p.año === filtro)
  } else if (tipo === 'boolean') {
    return peliculas.filter(p => p.estrenada === filtro)
  } else {
    if (generos.includes(filtro)) {
      return peliculas.filter(p => p.genero === filtro)
    } else {
      return peliculas.filter(p => p.titulo === filtro)
    }
  }
}

const peliculas = [
  { titulo: 'Pelicula 1', año: 2019, estrenada: true, genero: 'accion' },
  { titulo: 'Pelicula 2', año: 2020, estrenada: true, genero: 'comedia' },
  { titulo: 'Pelicula 3', año: 2022, estrenada: true, genero: 'comedia' },
  { titulo: 'Pelicula 4', año: 2024, estrenada: false, genero: 'drama' },
]

console.log(filtrar(peliculas, 'comedia'))
console.log(filtrar(peliculas, '2'))
console.log(filtrar(peliculas, 2020))
console.log(filtrar(peliculas, true))


interface Pelicula2 {
  titulo: string,
  fecha: number,
  estrenada: boolean,
  genero: string
}

interface Persona {
  nombre: string,
  apellidos: string,
  getNombreCompleto: () => string
}

interface Alumno extends Persona {
  curso: string
}

interface Alumno {
  getCalificaciones: () => Array<number>
}


const angel: Persona = {
  nombre: 'Ángel',
  apellidos: 'Villalba',
  getNombreCompleto: function () {
    return `${this.nombre} ${this.apellidos}`
  }
}

const charly: Alumno = {
  nombre: 'Charly',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    return `${this.nombre} ${this.apellidos}`
  },
  curso: 'JavaScript',
  getCalificaciones: function () {
    return [7, 8, 2, 7.5, 10]
  },
}

console.log(angel)
console.log(angel.getNombreCompleto())
console.log(charly)
console.log(charly.getNombreCompleto())


// class Coche {
//   id: string;
//   marca: string;
//   modelo: string;
//   matricula: string

//   constructor(id, marca, modelo, matricula) {
//     this.id = id;
//     this.marca = marca;
//     this.modelo = modelo
//     this.matricula = matricula
//   }

// }

class Coche {

  constructor(
    public id: string,
    public marca: string,
    public modelo: string,
    private _matricula: string,
    readonly numBastidor: number,
  ) { }

  get matricula(): string {
    console.log('Pasa por el getter')
    return this._matricula
  }

  set matricula(matricula) {
    console.log('Pasa por el setter')
    this._matricula = matricula
  }

  getInformacion(): string {
    return '';
  }

}

const seat = new Coche('1', 'Seat', 'Ibiza', '2390 KBC', 12349)
// seat.numBastidor = 12345

seat.matricula = '2299 HJK'
console.log(seat.matricula)

// interface Coche {
//   id: string,
//   marca: string,
//   modelo: string,
//   matricula: string
// }

// const seat: Coche = { id: '1', marca: 'Seat', modelo: 'Ibiza', matricula: '2390 ABC' }


abstract class Animal {
  constructor(
    public nombre: string
  ) { }

  abstract getSonido(): string;
}

class Mono extends Animal {
  readonly tipo: string = 'Mono'

  constructor(
    public nombre: string,
  ) {
    super(nombre)
  }

  getSonido() {
    return 'uh uh uh'
  }
}



// enum Pais {
//   España = 10,
//   Portugal = 7,
//   Francia = 5,
//   Italia = 9,
//   Alemania,
// }

enum Pais {
  España = 'es-ES',
  Portugal = 'pt-PT',
  Francia = 'fr-FR',
  Italia = 'it-IT',
  Alemania = 'ge-GE',
}

console.log(Pais.Italia)
console.log(Pais.España)
console.log(Pais.Alemania)
// console.log(Pais[5])


function getItemAleatorio<T>(items: Array<T>): T {
  const randomPos = Math.floor(Math.random() * items.length)
  return items[randomPos]
}

let nombre: string = getItemAleatorio<string>(['Robb', 'Arya', 'Bran', 'Sansa', 'Rickon'])
console.log(nombre)
let persona: Persona = getItemAleatorio<Persona>([angel, charly])
console.log(persona)


interface Inventario<T> {
  addItem(item: T): void,
  removeItem(pos: number): T,
  getItems(): Array<T>
}

class Catalogo<T> implements Inventario<T> {
  private catalogo: Array<T> = []

  addItem(item: T): void {
    if (this.catalogo.some(i => i.id === item.id)) {
      throw new Error("El item ya estaba en el catálogo.");
    }
    this.catalogo.push(item)
  }

  removeItem(pos: number): T {
    if (pos < this.catalogo.length) {
      const [item] = this.catalogo.splice(pos, 1)
      return item
    }
    throw new Error("El catálogo no tiene tantos items.");
  }

  getItems(): T[] {
    return this.catalogo
  }
}

const catalogoCoches = new Catalogo<Coche>()
catalogoCoches.addItem(seat)
catalogoCoches.addItem(new Coche('2', 'Honda', 'Civic', '1234 GHJ', 126732))
console.log(catalogoCoches.getItems())
const seatEliminado = catalogoCoches.removeItem(0)
console.log(catalogoCoches.getItems())
console.log(seatEliminado)





// const miMap = new MiMap<string, Coche>()
// miMap.set('seat', seat)
// miMap.set('bmw', new Coche('3', 'BMW', 'X5', '7829 THR', 12398))

// miMap.show()
// console.log(miMap.has('tesla'))
// console.log(miMap.get('bmw'))
// miMap.clear()
// miMap.show()

const miMap = new MiMap2<string, Coche>()
miMap.set('seat', seat)
miMap.set('bmw', new Coche('3', 'BMW', 'X5', '7829 THR', 12398))

miMap.show()
console.log(miMap.has('tesla'))
console.log(miMap.get('bmw'))
miMap.clear()
miMap.show()