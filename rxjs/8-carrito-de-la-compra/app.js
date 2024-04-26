const { Subject, fromEvent, merge, map } = rxjs

const productos = [
  { id: 1, nombre: 'Cuchillos de Chef', precio: 70 },
  { id: 2, nombre: 'Cuchara de madera', precio: 15 },
  { id: 3, nombre: 'Mandil', precio: 7 },
  { id: 4, nombre: 'Sarten de acero inoxidable', precio: 50 },
]

const carrito = {}

const actualizarCarrito$ = new Subject()

const inicializar = () => {
  document.getElementById('productos').innerHTML = productos.map(getProducto).join('')

  actualizarCarrito$
    .subscribe(() => {
      const productosEnCarrito = Object.values(carrito)
      document.getElementById('carrito').innerHTML = productosEnCarrito.map(getProductoCarrito).join('')
      document.getElementById('total').innerText = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    })

  const addProductoAlCarrito$ = productos.map((producto) => {
    return fromEvent(document.getElementById(producto.id), 'click')
      .pipe(
        map(() => producto)
      )
  })

  merge(...addProductoAlCarrito$)
    .subscribe((producto) => {

      const productoId = producto.id

      console.log(Object.keys(carrito))
      console.log(productoId)

      if (Object.keys(carrito).includes(productoId.toString())) {
        carrito[productoId].cantidad += 1
      } else {
        carrito[productoId] = { cantidad: 1, nombre: producto.nombre, precio: producto.precio }
      }

      actualizarCarrito$.next()
    })

}


const getProducto = (producto) => {
  return `
    <div>
      <h3>${producto.nombre}</h3>
      <p>Precio: ${producto.precio}€</p>
      <button type="button" id="${producto.id}">Añadir al carrito</button>
    </div>
  `
}

const getProductoCarrito = (producto) => {
  return `
    <p>${producto.nombre}: ${producto.cantidad} x ${producto.precio}€ = ${producto.cantidad * producto.precio}€</p>
  `
}

inicializar()