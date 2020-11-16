import CartActionTypes  from './cart.types'

export const toggleCartHidden = toggle => ({
    type:CartActionTypes.CART_DROPDOWN_TOGGLE
})

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})