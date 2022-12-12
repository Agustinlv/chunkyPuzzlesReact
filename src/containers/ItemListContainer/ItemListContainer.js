import {useState, useEffect} from 'react';

const ItemListContainer = () => {
    const [products, setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/agustinlv/chunkyPuzzlesReact/products')
        .then(response => response.json())
        .then(data => setProduct(data));
    },[]);

    return(
        <main>
            <div className="buyHeader">
                <h1 className="buyText">catalogo</h1>
            </div>
            <div id='catalogContainer'>
                {products.map((product) => 
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
                            <button className='addToCartButton'>detalle</button>
                            <button className='addToCartButton' id={product.id}>agregar al carrito</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ItemListContainer;