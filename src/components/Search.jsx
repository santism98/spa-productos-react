import { useState } from "react"
import { SearchCard } from "./SearchCard"
import { SearchForm } from "./SearchForm"


export const Search = () => {


  const [search, setsearch] = useState('')

  return (

    <>
      <section className="flex ">
        <div className="margin-2 text-left">
          <SearchForm setsearch={setsearch} />
        </div>

        <div className="margin-2 self-right">
          <p className="fsize-2r">Resultados</p>
          <SearchCard search={search} />
        </div>
      </section>
    </>
  )
}
