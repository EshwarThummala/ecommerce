import {
  addToCartAction,
  removeFromCartAction,
} from "../redux/actions/cartActions";
//<button onClick={() => dispatch(addToCartAction(product))}>Add to Cart</button>
//<button onClick={() => dispatch(removeFromCartAction(product.id))}>Remove from Cart</button>
import { Card, Button } from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";

const Product = ({ product, dispatch }) => {
  return (
    <MDBRipple className="bg-image" rippleTag="div" rippleColor="light">
      <img
        src={product.thumbnail}
        style={{ width: '400px', }}
      />
      <a href="#!">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <p className="text-white mb-0">{product.title}</p>
          </div>
        </div>
        <div className="hover-overlay">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </div>
      </a>
    </MDBRipple>
  );
};

export default Product;
