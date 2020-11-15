import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart,  } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'

const Review = () => {
    const[cart, setCart] = useState([]);

    const removeProduct = (productKey) => { 
        // console.log('remove clicked',productkey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
       removeFromDatabaseCart(productKey)

    } 


    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.values(savedCart);
        

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, []);
    return (
        <div className= "twin-container">
            {/* <h1 >Cart Items : {cart.length} </h1> */}
          <div className="product-container">
          {
                cart.map(product =>  <ReviewItem
                    key = {product.key}
                    removeProduct = {removeProduct}
                    product={product}></ReviewItem>)
            }
           
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>

        </div>
    );
};

export default Review;