const initialState = {
  products: [],
  currentCategoryProducts: [],
  searchItem: "",
  currentSearchItems: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_HOME_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "STORE_CATEGORY_PRODUCTS":
      return {
        ...state,
        currentCategoryProducts: action.payload,
      };
    case "UPDATE_SEARCH_ITEM":
      return {
        ...state,
        searchItem: action.payload,
      };
    case "UPDATE_CURRENT_SEARCH_RESULTS":
        return {
            ...state,
            currentSearchItems: action.payload
        }
    default:
      return state;
  }
};

export default productReducer;
