import '../../styles/layout.css';

/*import { Link } from "react-router-dom";*/
import { NavLink } from "react-router-dom";


/*const Nav = (props) => {
    return (
        <nav>
            <div className="holder"> 
        <ul >
            <li><Link to="/"> Home</Link> </li>

            <li><Link to="NosotrosPage">Nosotros</Link> </li>

            <li><Link to="ServiciosPage">Servicios </Link> </li>

            <li><Link to="GaleriaPage"> Galeria </Link> </li>

            <li><Link to="NovedadesPage"> Novedades </Link> </li>

            <li><Link to="ContactosPage"> Contactos </Link> </li>





        </ul>
        </div>
    </nav>
    );
}


export default Nav;*/



const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul >
                    <li><NavLink to="/" className={({ isActive }) => 
                    isActive ? "activo" : undefined}>Home</NavLink> </li>

                <li><NavLink to="/NosotrosPage" className={({ isActive }) => 
                    isActive ? "activo" : undefined}>Nosotros</NavLink> </li>

                <li><NavLink to="/ServiciosPage" className={({ isActive }) => 
                    isActive ? "activo" : undefined}>Servicios </NavLink> </li>

                <li><NavLink to="/GaleriaPage" className={({ isActive }) => 
                    isActive ? "activo" : undefined}> Galeria </NavLink> </li>

                <li><NavLink to="/NovedadesPage" className={({ isActive }) => 
                    isActive ? "activo" : undefined}> Novedades </NavLink> </li>

                <li><NavLink to="/ContactosPage" className={({ isActive }) => 
                    isActive ? "activo" : undefined}> Contactos </NavLink> </li>





            </ul>
        </div>
    </nav >
    )
}


export default Nav;