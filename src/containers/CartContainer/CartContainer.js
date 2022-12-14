import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
    const {cart, modifyCart} = useCartContext();

    return(
        <>
            <main>
                <div className="cartHeader">
                    <h1 className="buyText">carrito</h1>
                </div>
                <div className="cartContainer">
                    {
                        cart.length === 0 ?
                        <div className="cartMessage">
                            El carrito está vacío
                        </div>
                        :
                        <div id="cartItemContainer">
                            {cart.map((product)=>
                                <div className="cartItem" key={product.id}>
                                    <img id="cartItemImg" src={product.image} alt={product.name}></img>
                                    <div id="cartItemName">{product.name}</div>
                                    <div className="cartItemDesc">
                                        <ul>
                                            <li>${product.value}</li>
                                            <li>{product.count} piezas</li>
                                        </ul>
                                    </div>
                                    <div className="cartQtyCont">
                                        <div className="cartModify">
                                            <button className="cartModifyButton" onClick={()=> modifyCart(product,"remove")}>-</button>
                                            <div>{product.quantity}</div>
                                            <button className="cartModifyButton" onClick={()=> modifyCart(product,"add")}>+</button>
                                        </div>
                                        <div className="cartRemove">
                                            <button className="cartRemoveButton" onClick={()=> modifyCart(product,"clear")}>remove</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </main>
        </>
    );
};

export default CartContainer;