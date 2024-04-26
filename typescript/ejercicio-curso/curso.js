"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const matricula_1 = require("./matricula");
class Curso {
    /**
     *
     * @param {string} id
     * @param {string} titulo titulo del curso
     * @param {Persona} profesor profesor que imparte el curso
     * @param {number} precio precio que cuesta el curso
     */
    constructor(id, titulo, profesor, precio) {
        this.id = id;
        this.titulo = titulo;
        this.profesor = profesor;
        this.precio = precio;
        this.modulos = [];
        this.matriculas = [];
    }
    getInformacionCurso() {
        return `
      ${this.titulo}
      ---------------------------------
      Profesor: ${this.profesor.getNombreCompleto()}
      Precio: ${this.precio}€
      Duración: ${this.getDuracionCurso()}min
      Alumnos matriculados: ${this.matriculas.length}

      Contenido:
      ${this.modulos.map(m => m.getInformacionModulo()).join('')}
    `;
    }
    getDuracionCurso() {
        return this.modulos
            .map(m => m.getDuracionModulo())
            .reduce((acc, duracion) => acc + duracion, 0);
    }
    agregarModulo(modulo) {
        if (this.modulos.some(m => m.id === modulo.id)) {
            console.error('Este módulo ya está añadido');
            return;
        }
        this.modulos.push(modulo);
    }
    matricularAlumno(id, usuario) {
        const matricula = new matricula_1.Matricula(id, usuario);
        this.matriculas.push(matricula);
    }
}
exports.Curso = Curso;
