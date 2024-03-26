import { useSelector } from "react-redux";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

const Cart = ({ dispatch }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const isEmpty = cartItems.length == 0;
  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  const totalDiscountedPrice = (cartItems.reduce(
    (accumulator, item) =>
      accumulator + (item.price - item.price * (item.discountPercentage / 100)),
    0
  )).toFixed(1);
  return (
    <>
      {isEmpty ? (
        <h1>Empty Cart!! Go and shop something...</h1>
      ) : (
        <Row>
          <Col lg={8}>
            <Row style={{ marginTop: 10 }}>
              {cartItems.map((product) => (
                <Col lg={4} md={8} xs={12} style={{ marginTop: 20 }}>
                  <Product
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <MDBCard>
              <MDBCardHeader>Cost</MDBCardHeader>
              <MDBListGroup flush>
                {cartItems.map((item) => {
                  return (
                    <MDBListGroupItem>
                      <Row>
                        <Col lg={8}>
                          <span>{item.title}</span>
                        </Col>
                        <Col lg={2}>
                          <span style={{ color: "red" }}>
                            {"$" + item?.price}
                          </span>
                        </Col>
                        <Col lg={2} style={{ color: "green" }}>
                          {"$" +
                            (
                              item.price -
                              item.price * (item.discountPercentage / 100)
                            ).toFixed(1)}
                        </Col>
                      </Row>
                    </MDBListGroupItem>
                  );
                })}
                <MDBListGroupItem color="dark">
                  <Row>
                    <Col lg={8}>
                      <span>Total</span>
                    </Col>
                    <Col lg={2}>
                      <span style={{ color: "red" }}>{"$" + totalPrice}</span>
                    </Col>
                    <Col lg={2}>
                      <span style={{ color: "green" }}>
                        {"$" + totalDiscountedPrice}
                      </span>
                    </Col>
                  </Row>
                </MDBListGroupItem>
                <MDBListGroupItem color="success">
                  Hurray!! You saved ${(totalPrice-totalDiscountedPrice).toFixed(1)}
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Cart;
