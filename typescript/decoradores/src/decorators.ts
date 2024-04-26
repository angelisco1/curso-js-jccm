import { Token } from "./token"

export function isAuthenticated(target: Object, key: string, descriptor: any) {
  console.log({ target })
  console.log({ key })
  console.log({ descriptor })

  const oldDescriptor = descriptor.value

  descriptor.value = function (...args: Array<any>) {

    const token = Token.getToken()
    if (token) {

      const info = oldDescriptor.apply(this, args)
      console.log({ info })
      return info

    } else {
      throw new Error('No estás logueado')
    }

  }

  return descriptor
}

export function medirPerformance(target: Object, key: string, descriptor: any) {
  const oldDescriptor = descriptor.value

  descriptor.value = function (...args: Array<any>) {
    const tiempoInicial = performance.now()
    const info = oldDescriptor.apply(this, args)
    const tiempoFinal = performance.now()
    console.log(`La función ${key} ha tardado en ejecutarse ${tiempoFinal - tiempoInicial}ms`)

    return info
  }

  return descriptor
}