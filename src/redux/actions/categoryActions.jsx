export const addCategoriesAction = (data) => {
    return {
        type: "ADD_CATEGORIES",
        payload: data
    }
}

export const updateCategoriesAction = (category, data) => {
    return {
        type: "UPDATE_CATEGORY",
        category: category, 
        payload: data
    }
}

export const setCategoryAction = (data) => {
    return {
        type: "SET_CATEGORY",
        payload: data
    }
}