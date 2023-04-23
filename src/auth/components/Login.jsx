import { useContext } from 'react';
import { useForm } from '../../hooks/useForm'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const Login = () => {

    const { handleChange } = useForm('');

    const { setUser } = useContext(UserContext);

    const navigateTo = useNavigate()

    const handleSubmit = (ev) => {

        ev.preventDefault()

        const user = {

            id: Date.now(),
            username: ev.target.user.value,
            password: ev.target.password.value,
            date: new Date()

        }

        setUser(user)

        navigateTo('/index')
    }

    return (
        <>
            <section className="flex centrado flex-column margin-2">

                 <p className="fsize-2r">Login</p>

                <div className="text-center margin-1">
                    <Link to='/register'>Crear Cuenta</Link> 
                </div>

                <div className="login text-center justify-text">



                    <form onSubmit={handleSubmit} >

                        <input

                            type="text"
                            placeholder="Usuario"
                            name="user"
                            onChange={handleChange}

                        />

                        <input className="pass"

                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            onChange={handleChange}

                        />

                        <input

                            type="submit"
                            value="Log in"

                        />



                    </form>

                </div>
            </section>
        </>
    )
}
