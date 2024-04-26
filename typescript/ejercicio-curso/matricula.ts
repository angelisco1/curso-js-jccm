import { Persona } from "./persona";

class Matricula {
  constructor(
    public id: string,
    public alumno: Persona,
  ) { }
}

export { Matricula }