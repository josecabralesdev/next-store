import estilos from "./categoria.module.css"
import BotonVer from "./BotonVer"

const page = async () => {
  const categorias = await fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())

  const productos = await Promise.all(
    categorias.map(async (categoria) => {
      const producto = await fetch(`https://fakestoreapi.com/products/category/${categoria}?limit=1`)
        .then(res => res.json())
      return {
        image: producto[0].image,
        categoria
      }
    })
  )

  return (
    <>
      <div className={estilos.columnas}>
        {
          categorias.map((categoria, indice) =>
            <div
              className={`${estilos.columna} ${estilos.categoria}`}
              key={indice}>
              {categoria}
            </div>
          )
        }
      </div>
      <div className={estilos.columnas}>
        {
          productos.map((producto, indice) =>
            <div
              className={estilos.columna}
              key={indice}
            >
              <BotonVer valor={producto} />
            </div>
          )
        }
      </div>
    </>
  )
}

export default page