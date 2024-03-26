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
  MDBCardFooter
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
    <MDBCard className='h-100'>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
        
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
      <MDBCardFooter>
        {inCart.length === 0 ? (
          <MDBBtn onClick={handleAddToCart} style={{ width: "100%" }}>
            <i
              className="fa-solid fa-cart-shopping"
              style={{ marginRight: "5px" }}
            />{" "}
            ADD TO CART
          </MDBBtn>
        ) : (
          <MDBBtn onClick={handleRemoveFromCart} color="danger" style={{ width: "100%" }}>
            REMOVE FROM CART
          </MDBBtn>
        )}
      </MDBCardFooter>
    </MDBCard>
  );
};

export default Product;
