import { useState } from "react"

const ItenContador = ({stock, inicial, sumado})=> {
    const [ cantidad , setCantidad] = useState(inicial)

    const incrememnto = ()=> {
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const decrecimiento = ()=> {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="contador">
            <div className="control">
                <button className="button" onClick ={decrecimiento}>-</button>
                <h4 className="numero">{cantidad}</h4>
                <button className="button" onClick={incrememnto}>+</button>
            </div>
            <div>
                <button className="button" onClick={()=> sumado(cantidad)} disabled = {!stock}> Agregar al carrito</button>

            </div>
        </div>
    )
}

export default ItenContador