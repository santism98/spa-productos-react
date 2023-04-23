import { useFetch } from "../hooks/useFetch"
import { SingleProduct } from "./SingleProduct"


export const GridProducts = ({ category }) => {

  const url = `https://dummyjson.com/products/category/${category}`

  const request = useFetch(url)

  const product = request.products

  return (

    <>
      <section>
        <div className="gap-1 container auto centrado">

          {
            product.map(item => (

              <SingleProduct key={item.id} {...item} />

            ))
          }

        </div>
      </section>
    </>

  )
}
