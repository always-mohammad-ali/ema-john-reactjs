import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
        
    }
    const shipping = 15;
    const vat = (total) * 5/100;
    const grandTotal = total + shipping + vat ;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered:{props.cart.length}</h5>
            <h4>Total:${total.toFixed(2)}</h4>
            <h4>Shipping Charge:${shipping}</h4>
            <h4>Vat:${vat.toFixed(3)}</h4>
            <h4>GrandTotal:${grandTotal.toFixed(3)}</h4>
        

        </div>
    );
};

export default Cart;