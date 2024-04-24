"use strict";
var Traductor;
(function (Traductor) {
    const traducciones = {
        'hola': 'hello',
        'adios': 'bye'
    };
    Traductor.traduceEn = (texto) => {
        const textoToTranslate = texto.toLowerCase();
        if (Object.keys(traducciones).includes(textoToTranslate)) {
            return traducciones[textoToTranslate];
        }
        else {
            return `No tenemos la traducción de ${texto} para el lenguaje 'en'`;
        }
    };
})(Traductor || (Traductor = {}));
var Traductor;
(function (Traductor) {
    const traducciones = {
        'hola': 'hola',
        'adios': 'adios'
    };
    Traductor.traduceEs = (texto) => {
        const textoToTranslate = texto.toLowerCase();
        if (Object.keys(traducciones).includes(textoToTranslate)) {
            return traducciones[textoToTranslate];
        }
        else {
            return `No tenemos la traducción de ${texto} para el lenguaje 'es'`;
        }
    };
})(Traductor || (Traductor = {}));
// <reference path="traductor.ts" />
// console.log(Traductor.traduce('Hola', 'en'))
/// <reference path="traductor-en.ts" />
/// <reference path="traductor-es.ts" />
console.log(Traductor.traduceEn('Hola'));
console.log(Traductor.traduceEs('Hola'));
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
            const textoToTranslate = texto.toLowerCase();
            if (Object.keys(traducciones[lang]).includes(textoToTranslate)) {
                return traducciones[lang][textoToTranslate];
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
