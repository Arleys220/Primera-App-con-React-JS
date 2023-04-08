import CartWidget from "../CardWidget/Cardwidget"

const NavBar = () => {
    return(
        <nav>
            <h3>
                Front end Store
            </h3>
            <div>
                <button>Html</button>
                <button>Css</button>
                <button>JavaScript</button>
                <button>React Js</button>
                <button> Angular Js</button>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar