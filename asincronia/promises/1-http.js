const getUsuarios = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
}


getUsuarios()
  .then((resp) => {
    // resp.json()
    //   .then((data) => {
    //     console.log({ data })
    //   })

    return resp.json()
  })
  .then((usuarios) => {
    console.log({ usuarios })
  })


const getMensaje = () => {
  const promise = new Promise((resolve, reject) => {
    const mensaje = 'El canario está en la jaula...'

    setTimeout(() => {
      // Completa la promesa con ese mensaje
      resolve(mensaje)
      // reject('No hay mensaje')
    }, 2500)
  })

  return promise
}

getMensaje()
  .then((mensaje) => {
    alert(mensaje)
  })
  .catch(err => {
    alert(err)
  })



const getUsuariosConXHR = () => {
  // Promisify
  return new Promise((resolve, reject) => {

    const url = 'https://jsonplaceholder.typicode.com/users/2000'
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.addEventListener('readystatechange', (e) => {
      console.log({ e })
      console.log({ xhr })
      if (xhr.readyState === 4) {

        if (xhr.status === 200) {
          const resp = xhr.responseText
          const usuarios = JSON.parse(resp)

          console.log('Usuarios: ', usuarios)

          resolve(usuarios)
        } else {
          reject({ status: xhr.status })
        }

      }
    })

    xhr.send()

  })
}


getUsuariosConXHR()
  .then((usuarios) => {
    console.log('Http promisify', { usuarios })
  })
  .catch((err) => {
    if (err.status === 404) {
      console.error('Datos no encontrados')
    }// else if (...)
  })


// async/await
const getUsuariosAsync = async () => {

  try {
    // const resp = await getUsuarios()
    const resp = await getUsuariosConXHR()
    const usuarios = await resp.json()

    console.log('Async/Await: ', { usuarios })
  } catch (err) {
    console.error('Async/Await: ', err.status)
  }
}

getUsuariosAsync()


const getUsuariosAsync2 = async () => {
  try {
    // const resp = await getUsuarios()
    const resp = await getUsuariosConXHR()
    return resp

  } catch (err) {
    console.error('Async/Await 2: ', err.status)
    return Promise.reject(err)
  }
}

getUsuariosAsync2()
  .then(usuarios => {
    console.log('Async/Await 2: ', { usuarios })
  })
  .catch((err) => {
    console.error('Async/Await 2: ', err.status)
  })