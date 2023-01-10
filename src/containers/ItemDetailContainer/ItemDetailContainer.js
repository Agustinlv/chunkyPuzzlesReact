import { Link , useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import Loading from '../../components/Loading/Loading';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();
    const { modifyCart } = useCartContext();

    const setSelectedQuantity = (event)=>{
        setQuantity(parseInt(event.target.value));
    };
    
    useEffect(()=>{
        const db = getFirestore();
        const ref = doc(db, 'products', productId);
        getDoc(ref)
        .then(data => data.data())
        .then(data => ({ ...data, id: productId}))//Le tengo que agregar la propiedad id porque cuando se ejecuta el query por product id, la respuesta me trae todas las propiedades de dicho elemento, menos el id
        .then(data => setProduct(data))
        .finally(() => setLoading(false));
    },[productId]);

    return(
        <>
            <main>
                <div className="detailHeader">
                    <h1 className="buyText">detalle</h1>
                </div>
                {loading ?
                    <Loading />
                :
                    <div className='itemDetailContainer'>
                        <div className='itemDescriptionContainer'>
                            <img src={product.image} alt="Puzzle Thumbnail"></img>
                            <div>
                                <ul>
                                    <li>{product.name}</li>
                                    <li>{product.pieces} piezas</li>
                                    <li>${product.price}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='itemDescriptionContainer'>
                            <p>{product.description}</p>
                            <img src={product['description-image']} alt="Example Thumbnail"></img>
                        </div>
                        <form>
                            <label>Elegir Cantidad</label>
                            <select onChange={setSelectedQuantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                        <button onClick={() => modifyCart("add", product, quantity)}>agregar al carrito</button>
                        <Link to='/shop'><button>volver al catalogo</button></Link>
                    </div>
                }
            </main>
        </>
    );
};

export default ItemDetailContainer;