import Link from 'next/link'

const page = () => {
  return (
    <>
      Pagina Principal
      <div>
        <Link href="/categorias">
          <button>Categorias</button>
        </Link>
        <Link href="/productos">
          <button>Productos</button>
        </Link>
      </div>
    </>
  )
}

export default page