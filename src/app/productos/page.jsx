import Ficha from "@/components/Ficha"
import estilos from "./productos.module.css"
import Link from "next/link"

const cargarDatos = () => {
  return fetch('https://fakestoreapi.com/products', { cache: 'no-store' })
    .then(res => res.json())
}

const page = async () => {
  const datos = await cargarDatos()

  return (
    <>
      <div className={estilos.productos}>
        {
          datos.map((valor, indice) =>
            <Ficha valor={valor} key={indice} />
          )
        }
      </div>
      <Link href="/productos">
        <button>Volver</button>
      </Link>
    </>
  )
}

export default page