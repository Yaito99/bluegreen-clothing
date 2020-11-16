import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-items/cart-items.component'

import { connect } from 'react-redux'

import './cart-dropdown.styles.scss'

const Cartdropdown = ( { cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => (
                    <CartItem key={cartItems.id} item ={item} />
            ))}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems} }) => ({
    cartItems:cartItems
})

export default  connect (mapStateToProps)(Cartdropdown)