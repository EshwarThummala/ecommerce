export const addToCartAction = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: data
    }
}

export const removeFromCartAction = (data) => {
    return {
        type: "DELETE_FROM_CART",
        payload: data
    }
}

export const updateQuantityAction = (id, data) => {
    return {
        type: "UPDATE_QUANTITY",
        id: id,
        payload: data
    }
}

export const emptyCartAction = () => {
    return {
        type: "EMPTY_CART",
    }
}