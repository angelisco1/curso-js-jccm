namespace Traductor {
  const traducciones = {
    'hola': 'hello',
    'adios': 'bye'
  }

  export const traduceEn = (texto: string): string => {

    const textoToTranslate = texto.toLowerCase()
    if (Object.keys(traducciones).includes(textoToTranslate)) {
      return traducciones[textoToTranslate]
    } else {
      return `No tenemos la traducción de ${texto} para el lenguaje 'en'`
    }
  }

}