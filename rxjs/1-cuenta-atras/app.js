const { interval, fromEvent, takeWhile, tap } = rxjs


let subscription = null

const startCuentaAtras = (segundos) => {
  console.log('Start cuenta atrás')

  subscription = interval(1000)
    .pipe(
      takeWhile((data) => {
        const segundosRestantes = segundos - (data + 1)
        return segundosRestantes >= 0
      }),
      tap((data) => {
        console.log('TAP: ', data)
        const segundosRestantes = segundos - (data + 1)
        document.getElementById('cuentaAtras').innerText = segundosRestantes
      })
    )
    .subscribe()

  // .subscribe((data) => {
  //   // console.log(data)
  //   // const segundosRestantes = segundos - (data + 1)
  //   // document.getElementById('cuentaAtras').innerText = segundosRestantes
  //   console.log('Se ha actualizado la cuenta atrás')

  //   // if (segundosRestantes < 0) {
  //   //   subscription.unsubscribe()
  //   // } else {
  //   //   document.getElementById('cuentaAtras').innerText = segundosRestantes
  //   // }

  // })

}

const stopCuentaAtras = () => {
  console.log('Stop cuenta atrás')
  subscription.unsubscribe()
}

fromEvent(document.getElementById('btnStart'), 'click')
  .subscribe(() => {
    const segundosIniciales = document.getElementById('segundosIniciales').value

    document.getElementById('cuentaAtras').innerText = segundosIniciales

    startCuentaAtras(segundosIniciales)
  })

fromEvent(document.getElementById('btnStop'), 'click')
  .subscribe(() => {
    stopCuentaAtras()
  })

// document.getElementById('btnStart').addEventListener('click', () => {
//   const segundosIniciales = document.getElementById('segundosIniciales').value

//   document.getElementById('cuentaAtras').innerText = segundosIniciales

//   startCuentaAtras(segundosIniciales)

// })

// document.getElementById('btnStop').addEventListener('click', () => {
//   stopCuentaAtras()
// })