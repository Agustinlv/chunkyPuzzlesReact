import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
    const {cart, cartTotalValue, checkedOut, modifyCart} = useCartContext();

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
                            {
                                checkedOut ? "gracias por su compra" : "el carrito está vacío"
                            }
                        </div>
                        :
                        <>
                            <div className="cartItemContainer">
                                {cart.map((product, idx)=>
                                    <div className="cartItem" key={idx}>
                                        <img src={product.image} alt={product.name}></img>
                                        <p>{product.name}</p>
                                        <ul>
                                            <li>${product.price}</li>
                                            <li>{product.pieces} piezas</li>
                                        </ul>
                                        <div className="cartQtyCont">
                                            <div className="cartModify">
                                                <button onClick={()=> modifyCart("remove", product)}>-</button>
                                                <div>{product.quantity}</div>
                                                <button onClick={()=> modifyCart("add", product)}>+</button>
                                            </div>
                                            <div className="cartRemove">
                                                <button onClick={()=> modifyCart("clear", product)}>eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="cartDetailContainer">
                                <p>detalle de compra</p>
                                <ul>
                                    {
                                        cart.map((product,idx)=>
                                            <li key={idx}>{product.name} x {product.quantity} = ${product.price * product.quantity}</li>
                                        )
                                    }
                                </ul>
                                <p>total ${cartTotalValue}</p>
                                <button onClick={() => modifyCart("checkout")}>pagar</button>
                                <Link to="/shop"><button>volver al catalogo</button></Link>
                            </div>
                        </>
                    }
                </div>
            </main>
        </>
    );
};

export default CartContainer;