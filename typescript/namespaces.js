// HabitacionHotel
// Hay 3 tipos: habitacion simple, habitacion doble y suite
// Cada una de ellas tiene que tener un precio
// Tiene que haber alguna función para calcular el precio total de la estancia en el hotel
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
}
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
var Traductor;
(function (Traductor) {
    const traducciones = {
        'en': {
            'hola': 'hello',
            'adios': 'bye'
        },
        'es': {
            'hola': 'hola',
            'adios': 'adios'
        }
    };
    Traductor.traduce = (texto, lang = 'en') => {
        if (Object.keys(traducciones).includes(lang)) {
            if (Object.keys(traducciones[lang]).includes(texto.toLowerCase())) {
                return traducciones[lang][texto];
            }
            else {
                return `No tenemos la traducción de ${texto} para el lenguaje ${lang}`;
            }
        }
        else {
            return 'No tenemos las traducciones para el lenguaje ' + lang;
        }
    };
})(Traductor || (Traductor = {}));
/// <reference path="traductor.ts" />
console.log(Traductor.traduce('Hello', 'en'));
