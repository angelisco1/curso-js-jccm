import { Usuario, Usuarios } from './usuario'
import { Proyecto, Proyectos } from './proyecto'
import { Token } from './token'

const USUARIOS: Usuarios = [
  new Usuario('admin', 'admin'),
  new Usuario('charly', '1234'),
]

const PROYECTOS: Proyectos = [
  new Proyecto('Proyecto secreto 1', 'Este es un proyecto muy muy secreto...'),
  new Proyecto('Proyecto secreto 2', 'Este es un proyecto muy muy secreto, más que el otro...'),
]

enum Vistas {
  Home,
  Login,
}

const getLoginPage = (): string => {
  return `
    <form>
      <div>
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button type="button" id="btnLogin">Login</button>
    </form>

  `
}

const initLoginListeners = (): void => {
  document.getElementById('btnLogin')?.addEventListener('click', () => {
    const userInput: HTMLInputElement | null = document.querySelector('#usuario')
    const passInput: HTMLInputElement | null = document.querySelector('#password')

    const usuario = {
      username: userInput?.value,
      password: passInput?.value,
    }

    const existeUsuario: Usuario | undefined = USUARIOS.find(user => user.username === usuario.username && user.password === usuario.password)

    if (existeUsuario) {
      login()
    }

  })
}


const getHomePage = (proyectos: Proyectos) => {
  const listaProyectos = proyectos.map(p => {
    return `
      <li>
        ${p.nombre}
        <button type="button" id="${p.nombre}">Ver + info</button>
      </li>
    `
  }).join('')

  return `
    <div>
      <h2>Mis proyectos</h2>

      <button type="button" id="btnLogout">Logout</button>

      <ul id="listaProyectos">
        ${listaProyectos}
      </ul>

      <div id="informacion">
      </div>

    </div>
  `
}

const initHomeListeners = () => {
  const buttons = document.querySelectorAll('#listaProyectos li button')

  buttons.forEach(button => {
    button.addEventListener('click', (ev: Event) => {
      // EventTarget
      const nombreProyecto = (ev.target as HTMLButtonElement).id
      const proyecto = PROYECTOS.find(p => p.nombre === nombreProyecto)

      if (proyecto) {
        const infoElement = document.getElementById('informacion')
        if (infoElement) {
          try {
            infoElement.innerText = proyecto.getInfo()
          } catch (err: any) {
            alert('ERROR: ' + err.message)
            logout()
          }
        }
      }

    })
  })

  document.getElementById('btnLogout')?.addEventListener('click', () => {
    logout()
  })
}

const login = (): void => {
  const token: string = Token.createToken()
  Token.setToken(token)
  setVista(Vistas.Home)
}

const logout = (): void => {
  Token.removeToken()
  setVista(Vistas.Login)
}


const setVista = (vista: Vistas = Vistas.Login): void => {
  const contenedor: HTMLDivElement = document.querySelector('#container')!

  if (vista === Vistas.Login) {
    const plantillaLogin: string = getLoginPage()
    contenedor.innerHTML = plantillaLogin
    initLoginListeners()
  } else {
    const plantillaHome: string = getHomePage(PROYECTOS)
    contenedor.innerHTML = plantillaHome
    initHomeListeners()
  }
}


export { setVista, Vistas }