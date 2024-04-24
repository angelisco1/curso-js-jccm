namespace Traductor {
  const traducciones = {
    'hola': 'hola',
    'adios': 'adios'
  }

  export const traduceEs = (texto: string): string => {

    const textoToTranslate = texto.toLowerCase()
    if (Object.keys(traducciones).includes(textoToTranslate)) {
      return traducciones[textoToTranslate]
    } else {
      return `No tenemos la traducción de ${texto} para el lenguaje 'es'`
    }
  }

}