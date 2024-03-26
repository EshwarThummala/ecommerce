export const storeHomeProductsAction = (data) => {
    return {
        type: "STORE_HOME_PRODUCTS",
        payload: data
    }
}

export const storeCategoryProductsAction = (data) => {
    return {
        type: "STORE_CATEGORY_PRODUCTS",
        payload: data
    }
}