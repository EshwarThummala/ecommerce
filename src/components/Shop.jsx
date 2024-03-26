import { useEffect } from "react";
import { storeHomeProductsAction } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../API/api";
import Product from "./Product";

const Shop = ({ setShop }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getAllProducts("5", dispatch)
    }, [])
    const homeProducts = useSelector(state => state.productStore.products)
    return <div>
        <h1>Shop Page</h1>
        <button onClick={() => setShop(false)}>Go to Home</button>
        {homeProducts.length == 0 ? <p>Loading Data</p> : homeProducts.map(product => <Product key={product.id} product={product} dispatch={dispatch}/>)}
    </div>
}

export default Shop;