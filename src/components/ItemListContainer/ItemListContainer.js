import '../../css/style.css';
import { getProducts } from "../../asyncmock";
import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(aux => aux.json()).then(aux => setProducts(aux[props.tipo]))
    }, []);

    return(
        <section className='section'>
            <ItemList products={products}/>
        </section>
    )
}

export default ItemListContainer;