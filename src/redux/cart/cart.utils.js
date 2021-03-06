export const addItemToCart= (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(
        item => item.id === itemToAdd.id);

    if (itemExists) {
        return cartItems.map(item => 
            item.id === itemToAdd.id 
            ? { ...item , quantity: item.quantity+1 }
            : item 
             )
    }

    return [...cartItems , {...itemToAdd, quantity: 1 }];
}

export const removeItemToCart = (cartItems,ItemToRemove) => {
    const ItemExists = cartItems.find(item => item.id === ItemToRemove.id);

    if (ItemExists.quantity === 1){
        return(cartItems.filter(item => item.id !== ItemToRemove.id))
    }

    return cartItems.map(
        item => item.id === ItemToRemove.id 
        ? {...item , quantity: item.quantity - 1}
        : item
    )
}