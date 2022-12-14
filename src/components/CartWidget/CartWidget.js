import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartSize } = useCartContext();

    return(
        <div className="cartIcon">{cartSize}</div>
    );
};

export default CartWidget;