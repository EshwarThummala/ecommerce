import {
  addToCartAction,
  removeFromCartAction,
} from "../redux/actions/cartActions";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

const Product = ({ product, dispatch }) => {
  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartAction(product.id));
  };

  const inCart = useSelector((state) =>
    state.cartItems.filter((item) => item.id === product.id)
  );

  const discountPrice = (product.price - (product.price*(product.discountPercentage/100))).toFixed(1)
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
        style={{ height: "200px", objectFit: "cover" }}
      >
        <MDBCardImage src={product.thumbnail} fluid alt="..." />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        {!product.discountPercentage ? (
          <MDBCardTitle style={{ color: "green" }}>
            {"$" + product?.price}
          </MDBCardTitle>
        ) : (
          <div style={{ display: "flex" }}>
            <MDBCardTitle
              style={{ color: "red", textDecoration: "line-through", marginRight: 10 }}
            >
              {"$" + product?.price}
            </MDBCardTitle>
            <MDBCardTitle
              style={{ color: "green"}}
            >
              {"$" + discountPrice}
            </MDBCardTitle>
          </div>
        )}
        <MDBCardTitle>{product?.title}</MDBCardTitle>
        <MDBCardText>{product?.description}</MDBCardText>
      </MDBCardBody>
      <MDBCardBody>
        {inCart.length === 0 ? (
          <MDBBtn onClick={handleAddToCart}>
            <i
              className="fa-solid fa-cart-shopping"
              style={{ marginRight: "5px" }}
            />{" "}
            ADD TO CART
          </MDBBtn>
        ) : (
          <MDBBtn onClick={handleRemoveFromCart} color="danger">
            REMOVE FROM CART
          </MDBBtn>
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Product;
