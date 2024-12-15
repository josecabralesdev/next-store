'use client'

import { useSelector, useDispatch } from "react-redux";
import { useState, useMemo } from "react";
import estilo from "./carrito.module.css"
import { devolver } from "@/store/miSlice";

const Carrito = () => {
  const [total, setTotal] = useState(0)
  const carrito = useSelector((state) => state.misValores.miCarrito)
  const dispatch = useDispatch()

  const calcularTotal = useMemo(() => setTotal(carrito.reduce((acumulador, valorActual) =>
    acumulador + valorActual.precio, 0)), [carrito])

  const elimnar = (producto) => {
    dispatch(devolver(producto))
  }

  return (
    <>
      <div>{total}</div>
      <div className={estilo.miCarrito}>
        {
          carrito.length > 0
            ? (carrito.map((valor, indice) =>
              <div key={indice}>
                <img onClick={() => elimnar(valor.producto)} src={valor.imagen} alt="" height="60" />
              </div>
            ))
            : (<div>Carrito vacío</div>)
        }
      </div>
    </>
  )
}

export default Carrito