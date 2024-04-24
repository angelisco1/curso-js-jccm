"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { MiMap } from './mi-map'
const mi_map_1 = __importDefault(require("./mi-map"));
const str = 'Hola mundo';
console.log(str);
let num = 2;
let cualquierValor;
cualquierValor = true;
cualquierValor = 'Cualquier valor';
cualquierValor = 11;
const edadPersona = 29;
// let timestamp: string | number = Date.now()
let timestamp = Date.now();
timestamp = getTimestamp();
function getTimestamp(param1, param2) {
    return Date.now() + '';
}
const telefono = ['+34', 666777888];
console.log(telefono[0] + ' ' + telefono[1]);
function doble(valor) {
    const tipo = typeof valor;
    if (tipo === 'number') {
        return valor * 2;
    }
    else if (tipo === 'string') {
        return valor + valor;
    }
    else {
        return null;
    }
}
console.log(doble(2));
console.log(doble('hola'));
const nums = [1, 2, 3, 4];
const codigos = ['es-ES', 'en-GB', 'fr-FR', 'en-US'];
const generos = ['accion', 'comedia', 'drama'];
function filtrar(peliculas, filtro) {
    const tipo = typeof filtro;
    if (tipo === 'number') {
        return peliculas.filter(p => p.año === filtro);
    }
    else if (tipo === 'boolean') {
        return peliculas.filter(p => p.estrenada === filtro);
    }
    else {
        if (generos.includes(filtro)) {
            return peliculas.filter(p => p.genero === filtro);
        }
        else {
            return peliculas.filter(p => p.titulo === filtro);
        }
    }
}
const peliculas = [
    { titulo: 'Pelicula 1', año: 2019, estrenada: true, genero: 'accion' },
    { titulo: 'Pelicula 2', año: 2020, estrenada: true, genero: 'comedia' },
    { titulo: 'Pelicula 3', año: 2022, estrenada: true, genero: 'comedia' },
    { titulo: 'Pelicula 4', año: 2024, estrenada: false, genero: 'drama' },
];
console.log(filtrar(peliculas, 'comedia'));
console.log(filtrar(peliculas, '2'));
console.log(filtrar(peliculas, 2020));
console.log(filtrar(peliculas, true));
const angel = {
    nombre: 'Ángel',
    apellidos: 'Villalba',
    getNombreCompleto: function () {
        return `${this.nombre} ${this.apellidos}`;
    }
};
const charly = {
    nombre: 'Charly',
    apellidos: 'Falco',
    getNombreCompleto: function () {
        return `${this.nombre} ${this.apellidos}`;
    },
    curso: 'JavaScript',
    getCalificaciones: function () {
        return [7, 8, 2, 7.5, 10];
    },
};
console.log(angel);
console.log(angel.getNombreCompleto());
console.log(charly);
console.log(charly.getNombreCompleto());
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
    constructor(id, marca, modelo, _matricula, numBastidor) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this._matricula = _matricula;
        this.numBastidor = numBastidor;
    }
    get matricula() {
        console.log('Pasa por el getter');
        return this._matricula;
    }
    set matricula(matricula) {
        console.log('Pasa por el setter');
        this._matricula = matricula;
    }
    getInformacion() {
        return '';
    }
}
const seat = new Coche('1', 'Seat', 'Ibiza', '2390 KBC', 12349);
// seat.numBastidor = 12345
seat.matricula = '2299 HJK';
console.log(seat.matricula);
// interface Coche {
//   id: string,
//   marca: string,
//   modelo: string,
//   matricula: string
// }
// const seat: Coche = { id: '1', marca: 'Seat', modelo: 'Ibiza', matricula: '2390 ABC' }
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Mono extends Animal {
    constructor(nombre) {
        super(nombre);
        this.nombre = nombre;
        this.tipo = 'Mono';
    }
    getSonido() {
        return 'uh uh uh';
    }
}
// enum Pais {
//   España = 10,
//   Portugal = 7,
//   Francia = 5,
//   Italia = 9,
//   Alemania,
// }
var Pais;
(function (Pais) {
    Pais["Espa\u00F1a"] = "es-ES";
    Pais["Portugal"] = "pt-PT";
    Pais["Francia"] = "fr-FR";
    Pais["Italia"] = "it-IT";
    Pais["Alemania"] = "ge-GE";
})(Pais || (Pais = {}));
console.log(Pais.Italia);
console.log(Pais.España);
console.log(Pais.Alemania);
// console.log(Pais[5])
function getItemAleatorio(items) {
    const randomPos = Math.floor(Math.random() * items.length);
    return items[randomPos];
}
let nombre = getItemAleatorio(['Robb', 'Arya', 'Bran', 'Sansa', 'Rickon']);
console.log(nombre);
let persona = getItemAleatorio([angel, charly]);
console.log(persona);
class Catalogo {
    constructor() {
        this.catalogo = [];
    }
    addItem(item) {
        if (this.catalogo.some(i => i.id === item.id)) {
            throw new Error("El item ya estaba en el catálogo.");
        }
        this.catalogo.push(item);
    }
    removeItem(pos) {
        if (pos < this.catalogo.length) {
            const [item] = this.catalogo.splice(pos, 1);
            return item;
        }
        throw new Error("El catálogo no tiene tantos items.");
    }
    getItems() {
        return this.catalogo;
    }
}
const catalogoCoches = new Catalogo();
catalogoCoches.addItem(seat);
catalogoCoches.addItem(new Coche('2', 'Honda', 'Civic', '1234 GHJ', 126732));
console.log(catalogoCoches.getItems());
const seatEliminado = catalogoCoches.removeItem(0);
console.log(catalogoCoches.getItems());
console.log(seatEliminado);
// const miMap = new MiMap<string, Coche>()
// miMap.set('seat', seat)
// miMap.set('bmw', new Coche('3', 'BMW', 'X5', '7829 THR', 12398))
// miMap.show()
// console.log(miMap.has('tesla'))
// console.log(miMap.get('bmw'))
// miMap.clear()
// miMap.show()
const miMap = new mi_map_1.default();
miMap.set('seat', seat);
miMap.set('bmw', new Coche('3', 'BMW', 'X5', '7829 THR', 12398));
miMap.show();
console.log(miMap.has('tesla'));
console.log(miMap.get('bmw'));
miMap.clear();
miMap.show();
