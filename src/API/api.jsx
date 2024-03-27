import axios from 'axios';
import { storeHomeProductsAction, updateSearchItemResultsAction } from '../redux/actions/productsActions';
import { addCategoriesAction, updateCategoriesAction } from '../redux/actions/categoryActions';

export const getAllProducts = async (limit, dispatch) => {
    try{
        const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`)
        dispatch(storeHomeProductsAction(response.data.products))
    }
    catch(error){
        console.log("Error occured in getAllProducts")
    }
}

export const getProductByCategory = async (category, dispatch) => {
    try{
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
        dispatch(updateCategoriesAction(category, response.data.products))
    }
    catch(error){
        console.log("Error occured in getProductByCategory")
    }
}

export const getCategories = async (dispatch) => {
    try{
        const response = await axios.get('https://dummyjson.com/products/categories')
        dispatch(addCategoriesAction(response.data))
    }
    catch(error){
        console.log("Error occured in getCategories")
    }
}

export const getProductsBySearch = async (dispatch, keyword) => {
    try{
        const response = await axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
        dispatch(updateSearchItemResultsAction(response.data.products))
    }
    catch(error){
        console.log("Error occured in getProductsBySearch")
    }
}