import CartWidget from "../CardWidget/Cardwidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to ='/' >
            <h3>
                Front end Store
            </h3>
            </Link>
            <div className="Categorias">
                <NavLink to={`/categoria/Lenguajes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>JavaScript</NavLink>
                <NavLink to={`/Frenworks/ReactJs`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>ReactJs</NavLink>
                <NavLink to={`/Frenworks/AngularJs`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>AngularJs</NavLink>
                <NavLink to={`/Frenworks/NodeJs`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>NodeJs</NavLink>
                
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar