import { GridProducts } from "./GridProducts"


export const Smartphones = () => {

  
  const category = 'smartphones';

  return (

    <> 
    <h2 className="categoria text-left"> Smartphones</h2>
    <GridProducts category={category} />

    </>

  )
}
