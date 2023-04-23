import { useForm } from "../hooks/useForm"



export const SearchForm = ({setsearch}) => {

  const { handleChange } = useForm('');

  const handleSubmit = (ev) => {

    ev.preventDefault()

    const search = ev.target.search.value
    
    setsearch(search)

  }



  return (

    <>

        <div>
          <p className="fsize-2r buscar">Buscar</p>

          <form onSubmit={handleSubmit}>

            <input

              type="text"
              placeholder="Buscar"
              name="search"
              onChange={handleChange}

            />


            <input className="search"

              type="submit"
              value="Buscar"

            />

          </form>
        </div>

    </>

  )
}



