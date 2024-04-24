// HabitacionHotel
// Hay 3 tipos: habitacion simple, habitacion doble y suite
// Cada una de ellas tiene que tener un precio
// Tiene que haber alguna función para calcular el precio total de la estancia en el hotel

abstract class HabitacionHotel {
  public estaDisponible: boolean = true

  constructor(
    public id: string,
    public numHabitacion: number,
    public capacidad: number
  ) { }

  abstract calcularPrecioEstancia(fechaInicio: Date, fechaFin: Date): number;

  static calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date, precio: number): number {
    const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
    return totalDias * precio
  }
}

class HabitacionSimple extends HabitacionHotel {
  private precio: number = 25

  constructor(
    public id: string,
    public numHabitacion: number,
  ) {
    super(id, numHabitacion, 2)
  }

  calcularPrecioEstancia(fechaInicio: Date, fechaFin: Date): number {
    return HabitacionHotel.calcularPrecioHabitacion(fechaInicio, fechaFin, this.precio)
  }
}

class HabitacionDoble extends HabitacionHotel {
  private precio: number = 45

  constructor(
    public id: string,
    public numHabitacion: number,
  ) {
    super(id, numHabitacion, 4)
  }

  calcularPrecioEstancia(fechaInicio: Date, fechaFin: Date): number {
    return HabitacionHotel.calcularPrecioHabitacion(fechaInicio, fechaFin, this.precio)
  }
}

class HabitacionSuite extends HabitacionHotel {
  private precio: number = 100

  constructor(
    public id: string,
    public numHabitacion: number,
  ) {
    super(id, numHabitacion, 8)
  }

  calcularPrecioEstancia(fechaInicio: Date, fechaFin: Date): number {
    return HabitacionHotel.calcularPrecioHabitacion(fechaInicio, fechaFin, this.precio)
  }
}

const fecha1 = new Date(2024, 10, 18)
const fecha2 = new Date(2024, 10, 21)

const habSimple = new HabitacionSimple('1', 200)
const habSuite = new HabitacionSuite('2', 502)

console.log(habSimple.calcularPrecioEstancia(fecha1, fecha2))
console.log(habSuite.calcularPrecioEstancia(fecha1, fecha2))