import { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Loading from '../../components/Loading/Loading';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredTypes, setFilteredTypes] = useState([]);
    const { modifyCart } = useCartContext();
    const { productType } = useParams();
    
    useEffect(()=>{
        const db = getFirestore();
        const products = collection(db, 'products');
        const productTypes = ["madera", "carton"];
        let selectedType = [];
        selectedType.push(productType);
        getDocs(products)
        .then(response => response.docs.map(product => ({id: product.id, ...product.data()})))
        .then(data => productType ? data.filter(obj => obj.type === productType) : data)
        .then(data => setProducts(data))
        .finally(() => setLoading(false));

        setFilteredTypes(productType ? selectedType : productTypes);
    },[productType]);

    return(
        <main>
            <div className="buyHeader">
                <h1 className="buyText">catalogo</h1>
            </div>
            <div className='catalogContainer'>
                {loading ?
                    <Loading />
                :
                filteredTypes.map((type,index) => 
                    <div className='categoryContainer' key={index}>
                        <h2 className='categoryText'>{type}</h2>
                        <hr></hr>
                        <div className='productsContainer'>
                            {products.filter(obj => obj.type === type)
                            .map((product, index) => 
                                <div id='productContainer' key={index}>
                                    <div id='prodImgCont'>
                                        <img src={product.image} alt="puzzle thumbnail"></img>
                                    </div>
                                    <ul id='prodDescList'>
                                        <li id='prodTitle'>{product.name}</li>
                                        <li>${product.price}</li>
                                        <li>{product.pieces} piezas</li>
                                    </ul>
                                    <div id='prodAction'>
                                        <Link to={`/detail/${product.id}`}><button className='addToCartButton'>detalle</button></Link>
                                        <button className='addToCartButton' onClick={() => modifyCart("add", product)}>agregar al carrito</button>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    )
                }
            </div>
        </main>
    );
};

export default ItemListContainer;