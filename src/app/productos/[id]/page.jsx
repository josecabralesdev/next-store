import FichaIndividual from "./FichaIndividual"

const cargarDatos = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' })
    .then(res => res.json())
}

const page = async ({ params }) => {
  const { id } = await params

  const datos = await cargarDatos(id)

  return (
    <div>
      <FichaIndividual datos={datos} />
    </div>
  )
}

export default page