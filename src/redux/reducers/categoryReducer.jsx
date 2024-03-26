const initialState = {
  categories: [],
  itemsBasedOnCategory: {},
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
    default:
        return state
  }
};

export default categoryReducer;
