import { Persona } from './persona'
import { Curso } from './curso'
import { Modulo } from './modulo'
import { Leccion } from './leccion'
import { Evaluacion } from './evaluacion'
import { Pregunta } from './pregunta'
import { Respuesta } from './respuesta'


const angel = new Persona('Ángel', 'Villalba')
const curso = new Curso('c1', 'Curso de JavaScript', angel, 20)

const mike = new Persona('Mike', 'Kozinsky')
const charly = new Persona('Charly', 'Falco')

curso.matricularAlumno('1', mike)
curso.matricularAlumno('2', charly)

const modulo1 = new Modulo('m1', 'Introducción a JS')

const leccion1 = new Leccion('l1', 'Tipos de datos', 5)
const leccion2 = new Leccion('l2', 'Variables', 20)
const evaluacion1 = new Evaluacion('e1', 'Tipos de datos y variables')

const respuesta1 = new Respuesta('r1', 'Si', true)
const respuesta2 = new Respuesta('r2', 'No', false)
const respuesta3 = new Respuesta('r3', 'Si', false)
const respuesta4 = new Respuesta('r4', 'No', true)

const pregunta1 = new Pregunta('p1', '¿La variable "var titulo" está bien declarada?', [respuesta1, respuesta2])
const pregunta2 = new Pregunta('p2', '¿La variable "var 3titulo" está bien declarada?', [respuesta3, respuesta4])

evaluacion1.agregarPregunta(pregunta1)
evaluacion1.agregarPregunta(pregunta2)

modulo1.agregarContenido(leccion1)
modulo1.agregarContenido(leccion2)
modulo1.agregarContenido(evaluacion1)

curso.agregarModulo(modulo1)


const modulo2 = new Modulo('m2', 'JS en el navegador')
const leccion3 = new Leccion('l3', 'Objeto window', 30)
modulo2.agregarContenido(leccion3)

curso.agregarModulo(modulo2)

const info = curso.getInformacionCurso()
console.log(info)