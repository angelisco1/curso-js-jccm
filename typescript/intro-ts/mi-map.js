"use strict";
// Crear una clase que funcione como un Map generico (objeto clave/valor). • Tiene que tener las siguientes funcionalidades:
// ◦ Añadir un nuevo elemento
// ◦ Obtener un elemento
// ◦ Comprobar si existe un elemento
// ◦ Vaciar la lista
// ◦ Mostrar los items que hay en el Map
Object.defineProperty(exports, "__esModule", { value: true });
class MiMap {
    constructor() {
        // TODO: mirar el tipo de obj
        this.obj = {};
    }
    set(key, valor) {
        this.obj[key] = valor;
    }
    get(key) {
        return this.obj[key];
    }
    has(key) {
        return Object.keys(this.obj).some(k => k === key);
    }
    clear() {
        this.obj = {};
    }
    show() {
        Object.entries(this.obj).forEach((entry) => {
            console.log(`${entry[0]}: ${JSON.stringify(entry[1])}`);
        });
    }
}
// export { MiMap }
exports.default = MiMap;
