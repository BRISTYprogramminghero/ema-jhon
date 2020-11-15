import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart'
import {addToDatabaseCart} from '../../utilities/databaseManager'


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const[products, setProducts] = useState (first10)
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log('product',product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(count, product.key); 
    }
    
    return (
        <div className="twin-container">
           
         <div className="product-container">
            
                  {
                      products.map(product => <Product
                      key={product.key}
                         handleAddProduct =  {handleAddProduct}
                         product={product}>{product.name}
                         </Product>)
                  }
              
         </div>
         <div className="cart-container">
             {/* <h1>This is cart</h1>
                <h5>Order summery {cart.length}</h5> */}
                <Cart cart = {cart}></Cart>
         </div>         
           
        </div>
    );
};

export default Shop;