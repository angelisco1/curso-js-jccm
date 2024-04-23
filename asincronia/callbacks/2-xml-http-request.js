const getUsuarios = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const xhr = new XMLHttpRequest()

  xhr.open('GET', url)

  xhr.addEventListener('readystatechange', (e) => {
    console.log({ e })
    console.log({ xhr })
    if (xhr.readyState === 4) {
      const resp = xhr.responseText
      const usuarios = JSON.parse(resp)

      console.log('Usuarios: ', usuarios)
    }
  })

  xhr.send()
}

getUsuarios()
