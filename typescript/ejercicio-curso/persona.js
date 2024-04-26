"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    }
}
exports.Persona = Persona;
