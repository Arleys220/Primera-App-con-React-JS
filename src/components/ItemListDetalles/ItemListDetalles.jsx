import { useEffect, useState } from "react"
import { getProductosById } from "../../asyncMock"
import ItemDetalles from "../ItemCartDetelles/ItemCartDetalles"
import { useParams } from "react-router-dom"


const ItemListsDetalles = () => {
        const [ productos, setProductos] = useState(null)

        const {ItemId} = useParams()

        useEffect (()=> {
            getProductosById(ItemId)
            .then(Response => {
                setProductos(Response)
            })

            .catch(error => {
                console.error(error)
            })
        },[ItemId])

        return (
            <div className="ItemListDetalles">
                <ItemDetalles {...productos}/>
            </div>
        )
}

export default ItemListsDetalles

