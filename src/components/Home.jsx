import { useEffect } from "react";
import { storeHomeProductsAction } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../API/api";
import Product from "./Product";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getAllProducts("100", dispatch)
    }, [])
    const homeProducts = useSelector(state => state.productStore.products)
    return <div>
        <h1>Home Page</h1>
        {homeProducts.length == 0 ? <p>Loading Data</p> : homeProducts.map(product => <Product key={product.id} product={product}/>)}
    </div>
}

export default Home;