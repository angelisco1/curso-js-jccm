const { from, of, take, skip, toArray, Subject, BehaviorSubject, switchMap, fromEvent } = rxjs

const noticias = [
  'Noticia 1',
  'Noticia 2',
  'Noticia 3',
  'Noticia 4',
  'Noticia 5',
  'Noticia 6',
  'Noticia 7',
  'Noticia 8',
  'Noticia 9',
  'Noticia 10',
  'Noticia 11',
  'Noticia 12',
  'Noticia 13',
  'Noticia 14',
  'Noticia 15'
]

// const pagina = 2
const noticiasPorPagina = 5

const pagina$ = new BehaviorSubject(1)



const getNoticias = (pagina) => {
  return from(noticias)
    .pipe(
      skip((pagina - 1) * noticiasPorPagina),
      take(noticiasPorPagina),
      toArray()
    )
}

// const noticias$ = getNoticias()

// pagina$.subscribe((paginaActual) => {
//   getNoticias(paginaActual)
//     .subscribe((noticiasEnPagina) => {
//       console.log(noticiasEnPagina)
//       const listaNoticias = noticiasEnPagina.map(n => `<li>${n}</li>`).join('')
//       document.getElementById('listaNoticias').innerHTML = listaNoticias
//     })
// })


pagina$
  .pipe(
    switchMap((paginaActual) => {
      return getNoticias(paginaActual)
    })
  )
  .subscribe((noticiasEnPagina) => {
    console.log(noticiasEnPagina)
    const listaNoticias = noticiasEnPagina.map(n => `<li>${n}</li>`).join('')
    document.getElementById('listaNoticias').innerHTML = listaNoticias
  })


fromEvent(document.getElementById('btnNext'), 'click')
  .subscribe(() => {
    if (pagina$.value * noticiasPorPagina >= noticias.length) {
      console.error('No hay más páginas')
      return
    }

    pagina$.next(pagina$.value + 1)
  })

fromEvent(document.getElementById('btnPrev'), 'click')
  .subscribe(() => {
    if (pagina$.value === 1) {
      console.error('No hay más páginas')
      return
    }

    pagina$.next(pagina$.value - 1)
  })


// pagina$
//   .subscribe((paginaActual) => {

//     noticias$
//     .subscribe((noticiasEnPagina) => {
//       console.log(noticiasEnPagina)
//       const listaNoticias = noticiasEnPagina.map(n => `<li>${n}</li>`).join('')
//       document.getElementById('listaNoticias').innerHTML = listaNoticias
//     })


//   })


// of('Noticia 1', 'Noticia 2')
//   .pipe(
//     take(1)
//   )
//   .subscribe((data) => {
//     console.log('OF: ', data)
//   })

// of(['Noticia 1', 'Noticia 2'])
//   .pipe(
//     take(1)
//   )
//   .subscribe((data) => {
//     console.log('OF: ', data)
//   })


// from(['Noticia 1', 'Noticia 2'])
//   .pipe(
//     take(1)
//   )
//   .subscribe((data) => {
//     console.log('FROM: ', data)
//   })