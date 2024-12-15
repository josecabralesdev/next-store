'use client'

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Ficha from "@/components/Ficha"
import estilos from "../productos/productos.module.css"

const page = () => {
  const categoria = useSelector((state) => state.misValores.categorias)
  const [contenido, setContenido] = useState('')

  useEffect(() => {
    async function obetenerDatos() {
      const respuesta = await fetch(`https://fakestoreapi.com/products/categories/${categoria}`)
      const datos = await respuesta.json()
      setContenido(() => datos.map(valor =>
        <Ficha key={valor.id} valor={valor} />
      ))
    }

    obetenerDatos()
  }, [categoria])

  return (
    <div className={estilos.productos}>
      {contenido}
    </div>
  )
}

export default page