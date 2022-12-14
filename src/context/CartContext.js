import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0);

    const modifyCart = (product, action) => {
        let tempCart = cart;
        let tempProduct = tempCart.find(obj => obj.id === product.id);

        if(action === "add"){
            if(tempProduct){
                tempProduct.quantity++;
                tempCart.filter(obj => obj.id !== tempProduct.id).push(tempProduct);
            }
            else
            {
                product.quantity = 1;
                tempCart.push(product);
            };
        };

        if(action === "remove"){
            if(tempProduct.quantity > 1){
                tempProduct.quantity--;
                tempCart.filter(obj => obj.id !== tempProduct.id).push(tempProduct);
            }
        };
        
        if(action === "clear"){
            tempCart = tempCart.filter(obj => obj.id !== tempProduct.id);
        };

        setCart(tempCart);
        
        setCartSize(tempCart.reduce((acc, curr) => acc + curr.quantity, 0));
    };

    return (
        <CartContext.Provider value={{
            cart,
            cartSize,
            modifyCart
        }}>
            {children};
        </CartContext.Provider>
    );
};