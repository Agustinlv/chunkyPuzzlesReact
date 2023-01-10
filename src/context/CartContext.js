import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0);
    const [cartTotalValue, setCartTotalValue] = useState(0);
    const [checkedOut, setCheckedOut] = useState(false);
    const [dropdownStates, setDropdownStates] = useState([false, false]);
    
    //Aprovecho el cartcontext para sumar una función que me controla el estado de los menúes dropdown
    const changeDropdownState = (index, state) => {
        let tempStates = dropdownStates;
        
        tempStates[index] = state;

        setDropdownStates(tempStates);

        console.log(dropdownStates);
    };
    
    const modifyCart = (action, product=[], quantity=1) => {
        //Primero salvo el cart actual en una variable
        let tempCart = cart;
        //Luego filtro el cart temporario buscando la existencia del producto
        let tempProduct = tempCart.find(obj => obj.id === product.id);
        
        switch(action){
            case "add":
                if(tempProduct)
                {
                    tempProduct.quantity = tempProduct.quantity + quantity;
                    tempCart.filter(obj => obj.id !== tempProduct.id).push(tempProduct);
                }
                //Si no existe, entonces pusheo el producto al cart y la cantidad es igual a 1
                else
                {   
                    product.quantity = quantity;
                    tempCart.push(product);
                };

                setCheckedOut(false);
                
                break;
            case "remove":
                if(tempProduct.quantity > 1)
                {
                    tempProduct.quantity--;
                    tempCart.filter(obj => obj.id !== tempProduct.id).push(tempProduct);
                };
                
                break;
            case "clear": 
                tempCart = tempCart.filter(obj => obj.id !== tempProduct.id);
                
                break;
            case "checkout": 
                tempCart = [];
                
                setCheckedOut(true);
                
                break;
            default:
                console.log("No action was passed");
                
                break;
        };
        
        setCart(tempCart);

        setCartSize(tempCart.reduce((acc, curr) => acc + curr.quantity, 0));
    
        setCartTotalValue(tempCart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0));
    };
    
    return (
        <CartContext.Provider value={{
            cart,
            cartSize,
            cartTotalValue,
            checkedOut,
            dropdownStates,
            modifyCart,
            changeDropdownState
        }}>
            {children};
        </CartContext.Provider>
    );
};