import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-items/cart-items.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'

import './cart-dropdown.styles.scss'

const Cartdropdown = ( { cartItems , history ,dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? 
                cartItems.map(item => (
                    <CartItem key={item.id} item ={item} />
            ))
            : (<span className="empty-message">You don't have any items yet</span> )
        }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default  withRouter(connect(mapStateToProps)(Cartdropdown))