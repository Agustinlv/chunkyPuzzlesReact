import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartSize } = useCartContext();

    return(
        <div className="cart-widget">{cartSize}</div>
    );
};

export default CartWidget;