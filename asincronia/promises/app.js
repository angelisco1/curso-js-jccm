const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const inicializar = () => {

  document.getElementById('btn-buscar').addEventListener('click', async () => {

    console.log('Pasa por aquí')
    const nombre = getFiltro()

    const cocktails = await getCocktails(nombre)
    console.log(cocktails)

    mostrarCocktails(cocktails)

  })

}

const getFiltro = () => {
  const input = document.getElementById('filtro')
  const nombre = input.value
  return nombre
}

const getCocktails = async (nombre) => {
  const resp = await fetch(url + nombre)
  const data = await resp.json()
  return data.drinks
}

const mostrarCocktails = (cocktails) => {
  const listaCocktails = cocktails.map(c => `<li>${c.strDrink}</li>`).join('')

  document.getElementById('listaCocktails').innerHTML = listaCocktails
}

inicializar()