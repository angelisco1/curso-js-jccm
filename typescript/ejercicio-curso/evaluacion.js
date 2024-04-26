"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluacion = void 0;
const contenido_1 = require("./contenido");
class Evaluacion extends contenido_1.Contenido {
    constructor(id, titulo) {
        super(id, titulo);
        this.id = id;
        this.titulo = titulo;
        this.preguntas = [];
    }
    agregarPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }
    calificarEvaluacion() {
        // TODO:
    }
}
exports.Evaluacion = Evaluacion;
