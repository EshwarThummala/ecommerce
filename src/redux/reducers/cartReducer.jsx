const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [...state, {...action.payload, quantity: 1}]
        case "DELETE_FROM_CART":
            return state.filter(item => item.id !== action.payload)
        case "UPDATE_QUANTITY":
            return state.map(item => {
                if(item.id === action.id){
                    return {
                        ...item,
                        quantity: action.payload
                    }
                }
                return item
            })
        case "EMPTY_CART":
            return initialState
        default:
            return state
    }
}

export default cartReducer;

