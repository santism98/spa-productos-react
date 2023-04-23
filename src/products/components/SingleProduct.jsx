import { Link } from 'react-router-dom';

export const SingleProduct = ({ id, title, description, photo, price, rating, }) => {

  return (

    <>
      <article className="centrado box" id={id}>

        <div className="div-card text-center">

          <h3 className="text-center margin-1"> {title} </h3>

          <div className='img-container'>

            <img  src={photo} alt={title} title={title} />

          </div>

          <p className='margin-1 text-left'> Precio: {price} € </p>

          <div className='img-container'>

          <button className="auto bt-view">

            <Link to={`/index/detail-view/${id}`}> leer más </Link>

          </button>

          </div>

        </div>

      </article>
    </>

  )
}
