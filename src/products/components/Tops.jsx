import { GridProducts } from "./GridProducts"


export const Tops = () => {

  const category = 'tops';

  return (

    <> 

    <h2 className="categoria text-left"> Tops</h2>
    <GridProducts category={category} />

    </>

  )
}
