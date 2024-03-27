export const storeHomeProductsAction = (data) => {
  return {
    type: "STORE_HOME_PRODUCTS",
    payload: data,
  };
};

export const storeCategoryProductsAction = (data) => {
  return {
    type: "STORE_CATEGORY_PRODUCTS",
    payload: data,
  };
};

export const updateSearchItemAction = (data) => {
  return {
    type: "UPDATE_SEARCH_ITEM",
    payload: data,
  };
};

export const updateSearchItemResultsAction = (data) => {
    return {
      type: "UPDATE_CURRENT_SEARCH_RESULTS",
      payload: data,
    };
  };