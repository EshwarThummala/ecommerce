const initialState = {
    products : [],
    currentCategoryProducts : []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "STORE_HOME_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        case "STORE_CATEGORY_PRODUCTS":
            return {
                ...state,
                currentCategoryProducts : action.payload
            }
        default:
            return state
    }
}

export default productReducer;