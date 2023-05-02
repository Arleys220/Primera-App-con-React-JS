import ItenContador from "../itemCont/contador"

const ItemDetalles = ({id, nombre,img, categoria, descripcion, precio,stock}) => {

    return(
        <article className="CartItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p className="info">
                    Categoria: {categoria}
                </p>
                <p className="info">
                    Descripcion: {descripcion}
                </p>
                <p className="info">
                    Precio: {precio}
                </p>
            </section>
            <footer className="infoFooter">
            <ItenContador inicial={1} stock={10} sumado = {(cantidad) => console.log('Cantidad agregada', cantidad)} />
            </footer>
        </article>
    )
}

export default ItemDetalles