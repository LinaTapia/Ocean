import { createContext, useState, useContext } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    //Agregar producto
    const addCart = (newProduct) =>{
        const idDuplicated = cartList.findIndex(prod => prod.id == newProduct.id)
        if(idDuplicated!==-1){
            cartList[idDuplicated].cantidad += newProduct.cantidad
            setCartList([...cartList])
            return
        }
        setCartList([
            ...cartList,
            newProduct
        ])
    }
    //Vaciar carrito
    const deleteCart = () => setCartList( [] )

    //Eliminar producto
    const deleteProd = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id));
    }

    //Precio Total de todos los Productos
    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
    }

    //Cantidad de Productos en Carrito
    const totalProds = () => {
        let cantItems = 0;
        cartList.forEach(prod => {
            cantItems += prod.cantidad;
        });
        return cantItems;
    }
    

    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            deleteCart,
            deleteProd,
            totalPrice,
            totalProds
        }}>
            {children}
        </CartContext.Provider>
    )
}