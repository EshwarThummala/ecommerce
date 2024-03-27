const initialState = {
  categories: [],
  itemsBasedOnCategory: {},
  currentCategory : ''
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        itemsBasedOnCategory: {
          ...state.itemsBasedOnCategory,
          [action.category]: action.payload,
        },
      }
    case "SET_CATEGORY":
      return {
        ...state,
        currentCategory : action.payload
      }
    default:
        return state
  }
};

export default categoryReducer;
