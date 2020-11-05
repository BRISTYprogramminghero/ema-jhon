import React from 'react';

const cart = (props) => {
    const cart = props. cart
    
    // const totalPrice = cart.reduce((total,prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0 ; i<cart.length ; i++){
        const product = cart [i];
        total = total +product.price
    }
    let shipping = 0;
    // const shipping = 4.99 ;
    if (total > 35){
        shipping = 0
    }
    
  
    else if (total > 15){
        shipping = 4.99
    }
    else if (total > 0){
        shipping = 12.99
    }
  


     const tax = ( total / 10).toFixed(2);
     const grandTotal = total + shipping + Number(tax).toFixed(2);

     const formatNumber = num =>{
         const pricision = num.toFixed(2);
         return Number(pricision);
     }



    return (
        <div>
             <h1>This is cart</h1>
             <p>Items Orders : {cart.length}</p>
             <p>Product Price : {formatNumber(total)}</p>
             <p><small>Shipping Cost : {shipping} </small></p>
             <p><small>Tax + Vat : {tax}</small></p>
             <p>Total price : {grandTotal}</p>
        </div>
    );
};

export default cart;