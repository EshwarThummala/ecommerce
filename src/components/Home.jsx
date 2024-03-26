import { useEffect } from "react";
import { storeHomeProductsAction } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../API/api";
import Product from "./Product";

const Home = ({ setShop }) => {
    const cartItems = useSelector(state => state.cartItems)
   return <>
    <h1>In Home Page</h1>
    <button onClick={() => setShop(true)}>Go to Shop</button>
    {console.log(cartItems)}
   </>
}

export default Home;