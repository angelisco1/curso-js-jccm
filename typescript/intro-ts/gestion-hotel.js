"use strict";
// HabitacionHotel
// Hay 3 tipos: habitacion simple, habitacion doble y suite
// Cada una de ellas tiene que tener un precio
// Tiene que haber alguna función para calcular el precio total de la estancia en el hotel
Object.defineProperty(exports, "__esModule", { value: true });
const disponibilidad_mixin_1 = require("./disponibilidad.mixin");
class HabitacionHotel {
    constructor(id, numHabitacion, capacidad) {
        this.id = id;
        this.numHabitacion = numHabitacion;
        this.capacidad = capacidad;
        this.estaDisponible = true;
    }
    static calcularPrecioHabitacion(fechaInicio, fechaFin, precio) {
        const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24);
        return totalDias * precio;
    }
    cambiarDisponibilidad(estaDisponible) { }
}
function applyMixins(derivedConst, baseConst) {
    baseConst.forEach(baseConst => {
        Object.getOwnPropertyNames(baseConst.prototype).forEach(propName => {
            derivedConst.prototype[propName] = baseConst.prototype[propName];
        });
    });
}
applyMixins(HabitacionHotel, [disponibilidad_mixin_1.Disponibilidad]);
class HabitacionSimple extends HabitacionHotel {
    constructor(id, numHabitacion) {
        super(id, numHabitacion, 2);
        this.id = id;
        this.numHabitacion = numHabitacion;
        this.precio = 25;
    }
    calcularPrecioEstancia(fechaInicio, fechaFin) {
        return HabitacionHotel.calcularPrecioHabitacion(fechaInicio, fechaFin, this.precio);
    }
}
class HabitacionDoble extends HabitacionHotel {
    constructor(id, numHabitacion) {
        super(id, numHabitacion, 4);
        this.id = id;
        this.numHabitacion = numHabitacion;
        this.precio = 45;
    }
    calcularPrecioEstancia(fechaInicio, fechaFin) {
        return HabitacionHotel.calcularPrecioHabitacion(fechaInicio, fechaFin, this.precio);
    }
}
class HabitacionSuite extends HabitacionHotel {
    constructor(id, numHabitacion) {
        super(id, numHabitacion, 8);
        this.id = id;
        this.numHabitacion = numHabitacion;
        this.precio = 100;
    }
    calcularPrecioEstancia(fechaInicio, fechaFin) {
        return HabitacionHotel.calcularPrecioHabitacion(fechaInicio, fechaFin, this.precio);
    }
}
const fecha1 = new Date(2024, 10, 18);
const fecha2 = new Date(2024, 10, 21);
const habSimple = new HabitacionSimple('1', 200);
const habSuite = new HabitacionSuite('2', 502);
console.log(habSimple.calcularPrecioEstancia(fecha1, fecha2));
console.log(habSuite.calcularPrecioEstancia(fecha1, fecha2));
habSuite.cambiarDisponibilidad(true);
console.log(habSuite);
habSuite.cambiarDisponibilidad(false);
console.log(habSuite);
