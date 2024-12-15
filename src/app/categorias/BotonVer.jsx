'use client'

import Imagen from "@/components/Imagen"
import { useDispatch } from "react-redux";
import { guardarCategorias } from "@/store/miSlice";
import { useRouter } from "next/navigation";

const BotonVer = ({ valor }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const visualizar = (e) => {
    dispatch(guardarCategorias(e))
    router.push('/portipo')
  }

  return (
    <div
      onClick={() => visualizar(valor.categoria)}
    >
      <Imagen
        valor={valor}
      />
    </div>
  )
}

export default BotonVer