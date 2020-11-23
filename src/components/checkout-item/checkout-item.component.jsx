import React from 'react'

import { connect } from 'react-redux'

import { destroyItem , addItem , removeItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem , destory , add , remove }) => {
    const {name , imageUrl , price, quantity } = cartItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt ='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={()=>remove(cartItem)} className='arrow'>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div onClick={()=>add(cartItem)} className='arrow'>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={()=> destory(cartItem)} className="remove-button">&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    destory:item => dispatch(destroyItem(item)),
    add:item => dispatch(addItem(item)),
    remove:item=> dispatch(removeItem(item))
})


export default connect(null , mapDispatchToProps)(CheckoutItem)