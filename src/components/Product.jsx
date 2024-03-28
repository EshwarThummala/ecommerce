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
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import "../css/Product.css";

const Product = ({ product, dispatch }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartAction(product.id));
  };

  const inCart = useSelector((state) =>
    state.cartItems.filter((item) => item.id === product.id)
  );

  const discountPrice = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(1);
  return (
    <>
      <ProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
      <MDBCard className="h-100">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <div className="cropped-image-container">
            <MDBCardImage src={product.thumbnail} fluid alt="..." />
          </div>
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
                style={{
                  color: "red",
                  textDecoration: "line-through",
                  marginRight: 10,
                }}
              >
                {"$" + product?.price}
              </MDBCardTitle>
              <MDBCardTitle style={{ color: "green" }}>
                {"$" + discountPrice}
              </MDBCardTitle>
            </div>
          )}
          <div style={{ height: "150px", width: "100%" }}>
            <MDBCardTitle>{product?.title}</MDBCardTitle>
            <MDBCardText className="description">
              {product?.description}
            </MDBCardText>
          </div>
          <MDBBtn onClick={() => setShowModal(true)} color="info">
            MORE DETAILS
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>
          {inCart.length === 0 ? (
            <MDBBtn onClick={handleAddToCart} block>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ marginRight: "5px" }}
              />{" "}
              ADD TO CART
            </MDBBtn>
          ) : (
            <MDBBtn onClick={handleRemoveFromCart} color="danger" block>
              REMOVE FROM CART
            </MDBBtn>
          )}
        </MDBCardFooter>
      </MDBCard>
    </>
  );
};

export default Product;
