"use strict";
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
