"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulo = void 0;
class Modulo {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
        this.contenidos = [];
        this.id = id;
        this.titulo = titulo;
    }
    agregarContenido(contenido) {
        if (this.contenidos.some(c => c.id === contenido.id)) {
            console.error('Este contenido ya está añadido');
            return;
        }
        this.contenidos.push(contenido);
    }
    getDuracionModulo() {
        return this.contenidos
            .reduce((acc, contenido) => {
            return acc + contenido.getDuracion();
        }, 0);
    }
    getInformacionModulo() {
        return `
      - ${this.titulo}
        ${this.contenidos.map(c => '-- ' + c.titulo).join('\n\t')}
    `;
    }
}
exports.Modulo = Modulo;
