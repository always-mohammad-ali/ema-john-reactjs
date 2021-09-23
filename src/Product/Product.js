import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {name, img, seller, price, stock, star} = props.product;
    
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={ () => props.handleAddToCart(props.product)} className='product-button'> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>
            </div>
        </div>
    );
};

export default Product;