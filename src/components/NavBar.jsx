import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from '../auth/context/UserContext'

export const NavBar = () => {

    const { user } = useContext(UserContext)

    return (


        <>
            <nav >

                <ul className='flex navbar bg-gray-light'>


                    <div className='flex'>

                        <li className='nav-link'><NavLink
                            to='/products'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Productos</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/sunglasses'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Gafas de sol</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/smartphones'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Smartphones</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/tops'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Tops</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/search'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Buscar</NavLink></li>
                    </div>

                    <div className='flex'>
                        {user?.username && <p className='nav-link pnav'>Hola {user.username}</p>}

                        <li className='nav-link'><NavLink
                            to='/auth'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >LogIn</NavLink></li>

                    </div>

                </ul >

            </nav>
        </>

    )
}
