import { useContext } from "react"
import { UserContext } from '../auth/context/UserContext'


export const Home = () => {

  const { user } = useContext(UserContext)

  return (

    <>
      <section className="flex centrado flex-column margin-2">

        <h1 className="margin-2">Home Page</h1>

        <h2>Bienvenido {user?.username}</h2>

      </section>
    </>


  )
}
