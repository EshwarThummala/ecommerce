import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const Cart = ({ dispatch }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const isEmpty = cartItems.length == 0;
  return (
    <>
      {isEmpty ? (
        <h1>Empty Cart!! Go and shop something...</h1>
      ) : (
        <Row style={{ marginTop: 10 }}>
          {cartItems.map((product) => (
            <Col lg={2} md={8} xs={12} style={{ marginTop: 20 }}>
              <Product key={product.id} product={product} dispatch={dispatch} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Cart;
