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