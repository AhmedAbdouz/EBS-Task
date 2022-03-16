import React from "react";
import {all_products} from '../App.js';
import ProductCard from "./productCard.js";

export default function AllProducts() {
    
    return (
        <div>
            <h3>All Products</h3>
            {/* {all_products} */}
            
            {all_products.map((object, i) => <ProductCard product={object}/>)}
            {/* {all_products.map((object, i) => <p>{object.client_name}</p>)} */}
        </div>
    );
}