import { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { modifyCart } = useCartContext();
    const { productType } = useParams();
    const productTypes = ["wooden", "cardboard"];

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/agustinlv/chunkyPuzzlesReact/products')
        .then(response => response.json())
        .then(data => productType ? data.filter(obj => obj.type === productType) : data)
        .then(data => setProducts(data))
        .finally(() => setLoading(false));
    },[productType]);

    return(
        <main>
            <div className="buyHeader">
                <h1 className="buyText">catalogo</h1>
            </div>
            <div id='catalogContainer'>
                {loading ?
                    <Loading />
                :
                    productType ?
                        products.map((product) => 
                            <div id='productContainer' key={product.id}>
                                <div id='prodImgCont'>
                                    <img src={product.image} alt="puzzle thumbnail"></img>
                                </div>
                                <ul id='prodDescList'>
                                    <li id='prodTitle'>{product.name}</li>
                                    <li>${product.value}</li>
                                    <li>{product.count} piezas</li>
                                </ul>
                                <div id='prodAction'>
                                    <Link to={`/detail/${product.id}`}><button className='addToCartButton'>detalle</button></Link>
                                    <button className='addToCartButton' onClick={() => modifyCart(product,"add")}>agregar al carrito</button>
                                </div>
                            </div>
                        )
                    :
                    productTypes.map((type) => 
                        <h2 className='categoryText'>{type}</h2>
                        /*products.filter(obj => obj.type === type)
                        .map((product) => 
                            <div id='productContainer' key={product.id}>
                                <div id='prodImgCont'>
                                    <img src={product.image} alt="puzzle thumbnail"></img>
                                </div>
                                <ul id='prodDescList'>
                                    <li id='prodTitle'>{product.name}</li>
                                    <li>${product.value}</li>
                                    <li>{product.count} piezas</li>
                                </ul>
                                <div id='prodAction'>
                                    <Link to={`/detail/${product.id}`}><button className='addToCartButton'>detalle</button></Link>
                                    <button className='addToCartButton' onClick={() => modifyCart(product,"add")}>agregar al carrito</button>
                                </div>
                            </div>*/
                    )
                }
            </div>
        </main>
    );
};

export default ItemListContainer;