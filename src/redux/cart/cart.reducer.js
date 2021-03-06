import CartActionTypes  from './cart.types'

import { addItemToCart , removeItemToCart } from './cart.utils'

const INITIAL_STATE ={
    hidden : true,
    cartItems:[]
}

const cartReducer = ( state = INITIAL_STATE , action) => {

    switch(action.type){
        case CartActionTypes.CART_DROPDOWN_TOGGLE :
            return {
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemToCart(state.cartItems , action.payload)
            }
        case CartActionTypes.DESTROY_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(
                    item => item.id !== action.payload.id 
                    )
            };
            default : 
            return state
    }
}

export default cartReducer