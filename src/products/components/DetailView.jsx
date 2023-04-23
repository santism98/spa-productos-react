import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom'

export const DetailView = () => {

  let { id } = useParams();

  const url = `https://dummyjson.com/products/${id}`

  const request = useFetch(url);

  const product = request.products

  const navigateTo = useNavigate()

  return (

    <>
      <article>


        <div className='card-detail flex space-even'>
          <div>
            <button
              className='bt-back'
              onClick={() => navigateTo(-1)}
            >Volver</button>

            <div>

              <img src={product.photo} alt={product.title} title={product.title} />

            </div>
          </div>

          <div className='flex flex-column info-detail'>
            <div className="margin-2 padding-2 justify-text">

            <h3 className="margin-2"> {product.title} </h3>
            <p className="margin-2">{product.description}</p>
            <p className="margin-2"> Precio: {product.price} € </p>
            <p className="margin-2"> Valoración: {product.rating} </p>
            
            </div>
          </div>
        </div>

      </article>
    </>

  )
}
