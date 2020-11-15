import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, category, seller, url, key, price} = props.product;
    console.log(props);

    const reviewItemStyle = {
        borderBottom : '1px solid lightgray',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '200px'
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">This is Review : {name}</h4>
            <p> Category : {category}</p>
            <p>Seller Name : {seller}</p>
            <p><small>$ : {price}</small></p>
            <p className="product-name"><small>Url : {url}</small></p>
            <br/>
            <button
             className="main-button"
             onClick = {() => props.removeProduct(key)}>
            Remove </button>
        </div>
    );
};

export default ReviewItem;