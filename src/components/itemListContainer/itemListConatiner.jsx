import { useEffect, useState } from "react"
import { getProductos, getProductosById } from "../../asyncMock"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams

    useEffect (()=>{

        const asyncFunc = categoriaId ? getProductosById : getProductos

        asyncFunc(categoriaId)
            .then (Response => {
            setProductos(Response)
            })
            .catch (error => {
            console.error(error)
            }) 
    },[categoriaId])



    return(
        <div> 
        <h1>{greeting}</h1>
        <ItemList productos = {productos}/>
        </div>
        
    )
}

export default ItemListContainer 