import axios from 'axios';
import { storeHomeProductsAction } from '../redux/actions/productsActions';

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
        dispatch(storeHomeProductsAction(response.data.products))
    }
    catch(error){
        console.log("Error occured in getProductByCategory")
    }
}