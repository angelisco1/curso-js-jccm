const { Observable } = rxjs

const ICONOS = {
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M.75 9.75a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-6Zm19.5 0a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-6Z" clip-rule="evenodd" />
  </svg>`,
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0 0 12 15v-4.5a.75.75 0 0 0-.75-.75H4.5Z" />
    <path fill-rule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z" clip-rule="evenodd" />
  </svg>`,
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z" clip-rule="evenodd" />
  </svg>`,
}


const getBateriaInfo = () => {
  return new Observable((suscriptor) => {

    setTimeout(() => {
      suscriptor.next(3)
    }, 1000)

    setTimeout(() => {
      suscriptor.next(2)
    }, 2000)

    setTimeout(() => {
      suscriptor.next(1)
    }, 2600)

    setTimeout(() => {
      suscriptor.next(2)
    }, 3800)

    setTimeout(() => {
      suscriptor.next(1)
    }, 4400)

    setTimeout(() => {
      suscriptor.next(3)
    }, 6000)

    setTimeout(() => {
      // suscriptor.complete()
      suscriptor.error('La carga super mega rápida ha sobrecalentado la batería y esta ha explotado 🔥')
    }, 6200)


  })
}

const bateriaInfo$ = getBateriaInfo()

bateriaInfo$
  // .subscribe((numIcono) => {
  //   document.getElementById('iconoBateria').innerHTML = ICONOS[numIcono]
  // })
  .subscribe({
    next: (numIcono) => {
      document.getElementById('iconoBateria').innerHTML = ICONOS[numIcono]
    },
    error: (err) => {
      console.log(err)
    },
    complete: () => {
      console.log('Desenchufa el cargador que ya se ha cargado la batería')
    }
  })