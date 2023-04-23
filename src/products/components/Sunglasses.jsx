import { GridProducts } from "./GridProducts"


export const Sunglasses = () => {

 
  const category = 'sunglasses';

  return (

    <>

    <h2 className="categoria text-left"> Gafas de sol</h2>
    <GridProducts category={category} />

    </>

  )
}
