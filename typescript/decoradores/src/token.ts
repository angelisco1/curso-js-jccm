class Token {
  static createToken() {
    return Math.random().toString().slice(2)
  }

  static setToken(token: string) {
    window.localStorage.setItem('token', token)
  }

  static removeToken() {
    window.localStorage.removeItem('token')
  }

  static getToken(): string | null {
    return window.localStorage.getItem('token')
  }
}

export { Token }