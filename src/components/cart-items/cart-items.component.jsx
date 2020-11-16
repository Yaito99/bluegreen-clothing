import React from 'react'

import './cart-items.styles.scss'

const CartItem = ({item : {imageUrl , price , name , quanity}}) => (
    <div className="cart-item">
        <img src ={imageUrl} alt ={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="name"> {quanity} x {price}$</span>
        </div>
    </div>
)


export default CartItem