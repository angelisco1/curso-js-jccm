const { interval, map, combineLatestWith, tap, fromEvent, startWith } = rxjs

const GRADOS_CELSIUS_MIN = 18
const GRADOS_CELSIUS_MAX = 27

const getRandomGradosCelsius = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const getNuevaTemperatura = () => {
  return interval(4000)
    .pipe(
      map(() => getRandomGradosCelsius(GRADOS_CELSIUS_MIN, GRADOS_CELSIUS_MAX)),
      startWith(24),
    )
}

const nuevaTemperatura$ = getNuevaTemperatura()

const cambioMedida$ = fromEvent(document.getElementById('medidaGrados'), 'change')
  .pipe(
    map(ev => ev.target.value),
    startWith('c')
  )

nuevaTemperatura$
  .pipe(
    combineLatestWith(cambioMedida$),
    map((combinedData) => {
      const [temperatura, medida] = combinedData
      if (medida === 'f') {
        return (temperatura * 9 / 5) + 32 + ' ºF'
      } else if (medida === 'k') {
        return temperatura + 273.15 + ' ºK'
      } else {
        return temperatura + ' ºC'
      }
    })
  )
  .subscribe((temperatura) => {
    console.log(temperatura)
    document.getElementById('temperatura').innerText = temperatura
  })