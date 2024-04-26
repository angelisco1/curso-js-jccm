class Usuario {
  constructor(
    public username: string,
    public password: string
  ) { }
}

type Usuarios = Array<Usuario>

export { Usuario, Usuarios }