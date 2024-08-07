import { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/Theme'
import { FaCircleUser } from "react-icons/fa6";
const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (


    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
            Sistema de Gestion de Tareas
        </a>
        <div className='d-flex gap-2'>
            <button onClick={toggleTheme} className="btn btn-dark d-flex align-items-center">
                {theme === "light" ? <FaMoon className="me-2" /> : <FaSun className="me-2" />}
                Cambiar Tema
            </button>
            <div className="flex-shrink-0 dropdown">
                <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
                <FaCircleUser  className="fs-1 " />
                </a>
                <ul className="dropdown-menu text-small shadow " data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: 0, transform: 'translate3d(0.666667px, 34px, 0px)'}}>
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>

           
        </div>

    </div>
</nav>

 

    
  )
}

export default Header