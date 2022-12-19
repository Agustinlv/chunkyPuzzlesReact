import { Link , useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/agustinlv/chunkyPuzzlesReact/products/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    },[productId]);

    return(
        <>
            <main>
                <div className="detailHeader">
                    <h1 className="buyText">detalle</h1>
                </div>
                <div className='itemDetailContainer'>
                    <div className='itemDescriptionContainer'>
                        <img src={product.image} alt="Puzzle Thumbnail"></img>
                        <div>
                            <ul className='itemDescriptionList'>
                                <li>{product.name}</li>
                                <li>{product.count} piezas</li>
                                <li>${product.value}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='itemDescriptionContainer'>
                        <img src={product['detail-image']} alt="Example Thumbnail"></img>
                        <p className='itemDescriptionText'>{product.detail}</p>
                    </div>
                    <Link to='/shop'><button className='backToShopButton'>back to shop</button></Link>
                </div>
            </main>
        </>
    );
};

export default ItemDetailContainer;