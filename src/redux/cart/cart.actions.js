import CartActionTypes  from './cart.types'

export const toggleCartHidden = toggle => ({
    type:CartActionTypes.CART_DROPDOWN_TOGGLE
});

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
});

export const removeItem = item => ({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
});

export const destroyItem = item => ({
    type:CartActionTypes.DESTROY_ITEM,
    payload:item
});

