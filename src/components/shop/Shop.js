import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const[products, setProducts] = useState (first10)
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log('product',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
           
         <div className="product-container">
            
                  {
                      products.map(product => <Product
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