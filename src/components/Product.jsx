import { addToCartAction, removeFromCartAction } from "../redux/actions/cartActions";


const Product = ({ product, dispatch }) =>{
    return (<>
            <p>{product.title}</p>
            <button onClick={() => dispatch(addToCartAction(product))}>Add to Cart</button>
            <button onClick={() => dispatch(removeFromCartAction(product.id))}>Remove from Cart</button>
        </>)
}

export default Product;