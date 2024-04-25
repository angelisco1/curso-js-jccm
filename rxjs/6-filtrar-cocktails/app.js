const { fromEvent, debounceTime, map, tap } = rxjs


const cocktails = [
  { name: 'Margarita', ingredients: ['Tequila', 'Lime', 'Cointreau'] },
  { name: 'Martini', ingredients: ['Gin', 'Vermouth'] },
  { name: 'Mojito', ingredients: ['Rum', 'Mint', 'Lime', 'Soda'] },
  { name: 'Bloody Mary', ingredients: ['Vodka', 'Tomato Juice', 'Tabasco', 'Worcestershire Sauce'] },
  { name: 'Pina Colada', ingredients: ['Rum', 'Coconut Cream', 'Pineapple Juice'] },
  { name: 'Cosmopolitan', ingredients: ['Vodka', 'Triple Sec', 'Cranberry Juice', 'Lime Juice'] },
  { name: 'Caipirinha', ingredients: ['Cachaca', 'Lime', 'Sugar'] },
  { name: 'Gin Tonic', ingredients: ['Gin', 'Tonic Water'] },
  { name: 'Old Fashioned', ingredients: ['Bourbon', 'Sugar', 'Bitters'] },
  { name: 'Daiquiri', ingredients: ['Rum', 'Lime', 'Sugar'] },
  { name: 'Negroni', ingredients: ['Gin', 'Vermouth', 'Campari'] },
  { name: 'Whiskey Sour', ingredients: ['Bourbon', 'Lemon Juice', 'Sugar'] },
]


const getInputValue = () => {
  return fromEvent(document.getElementById('filtro'), 'input')
    .pipe(
      debounceTime(700),
      map(ev => ev.target.value)
    )
}

const filtro$ = getInputValue()

filtro$
  .pipe(
    tap((filtro) => {
      console.log(filtro)
      document.getElementById('filtroPor').innerText = filtro
    }),
    map((filtro) => {
      return cocktails.filter(c => c.name.toLowerCase().includes(filtro.toLowerCase()))
    })
  )
  .subscribe((cocktailsFiltrados) => {
    const listaFiltrada = cocktailsFiltrados.map(c => `<li>${c.name}</li>`).join('')

    document.getElementById('listaCocktails').innerHTML = listaFiltrada
  })