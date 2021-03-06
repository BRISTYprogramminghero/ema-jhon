import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart,  } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {
    const[cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState([false]);
    const history = useHistory()

    const handleProccedCheckout = () => {
      history.push('/shipment')
      //   setCart ([]);
      //   setOrderPlaced(true);
      //  processOrder()
    }

                
    const removeProduct = (productKey) => { 
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
       removeFromDatabaseCart(productKey)

    } 


    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, []);
    let thankyou;
    if(orderPlaced){
       thankyou = <img src={happyImage} alt="" />;
    }
   
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

            {
              thankyou
            }
           
          </div>
          <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={handleProccedCheckout} className="main-button">Procced checkout</button>
            </Cart>
          </div>

        </div>
    );
};

export default Review;