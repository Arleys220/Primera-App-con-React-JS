const productos = [
    {
        id: "1",
        nombre: "ReactJs",
        precio: 2400,
        categoria: "Frenworks",
        img: "https://http2.mlstatic.com/D_NQ_NP_765841-MLA46107800565_052021-O.jpg",
        stock: 10,
        descripcion: "Camiseta logo ReactJs, 100% algodon"


    },
    {
        id: "2",
        nombre: "Node",
        precio: 2500,
        categoria: "Frenworks",
        img: "https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C61MmGiEO%2B-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
        stock: 10,
        descripcion: "Camiseta logo Node, 100% algodon"
    },
    {
        id: "3",
        nombre: "JavaScript",
        precio: 3000,
        categoria: "Lenguajes",
        img: "https://ih1.redbubble.net/image.361914293.3615/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u4.jpg",
        stock: 10,
        descripcion: "Camiseta logo JavaScript, 90% algodon, 10% Poliseter" 
    },
    {
        id: "4",
        nombre: "Angular",
        precio: 3000,
        categoria: "Frenworks",
        img: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;c:783236;h:320;s:H_J3;k:371ef3cabec6a9ebeebfd885b2395da8;p:1;f:f.jpg",
        stock: 10,
        descripcion: "Camiseta logo Angular, 90% algodon, 10% Poliseter" 
    }

]

export const getProductos = ()=> {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve (productos)
        }, 500)
    })
}

export const getProductosById = (productosId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (productos.find(prod => prod.id === productosId))
        })
    })
}