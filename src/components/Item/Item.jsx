import { Link } from "react-router-dom"

const Item =({ id, nombre, img, precio, stock}) =>{

    return(

        <article className="cartItem">
            <header className="header">
                <h2 className="itemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="itemImagen" />
            </picture>
            <section>
                <p className="info">
                    Precio: ${precio}
                </p>
                <p className="info">
                    Stock: ${stock}
                </p>
            </section>
            <footer className="itemFooter">
                <Link to={`/Item/${id}`} className="option">Ver descripcion</Link>
            </footer>

        </article>
        
    )
}
export default Item