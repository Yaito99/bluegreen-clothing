import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems , selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'


import './checkout.styles.scss'

const Checkout = ({cartItems , total}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>            
        </div>
        <div className="checkout-body">
        {
            cartItems.map(item => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))
        }
        </div>
        <div className="total">Total:${total}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - exp:01/21 - CVV:123
        </div>
        <StripeButton price={total} />
    </div>
)   

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout)