namespace Traductor {
  const traducciones = {
    'en': {
      'hola': 'hello',
      'adios': 'bye'
    },
    'es': {
      'hola': 'hola',
      'adios': 'adios'
    }
  }

  export const traduce = (texto: string, lang: string = 'en'): string => {
    if (Object.keys(traducciones).includes(lang)) {

      const textoToTranslate = texto.toLowerCase()
      if (Object.keys(traducciones[lang]).includes(textoToTranslate)) {
        return traducciones[lang][textoToTranslate]
      } else {
        return `No tenemos la traducción de ${texto} para el lenguaje ${lang}`
      }

    } else {
      return 'No tenemos las traducciones para el lenguaje ' + lang
    }
  }

}