"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leccion = void 0;
const contenido_1 = require("./contenido");
class Leccion extends contenido_1.Contenido {
    constructor(id, titulo, duracion) {
        super(id, titulo);
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.duracion = duracion;
    }
    getDuracion() {
        return this.duracion;
    }
}
exports.Leccion = Leccion;
