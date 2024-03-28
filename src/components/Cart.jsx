import { useSelector } from "react-redux";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBInputGroup,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBBadge,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useState } from "react";
import {
  emptyCartAction,
  updateQuantityAction,
} from "../redux/actions/cartActions";

const Cart = ({ dispatch }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const isEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  const totalDiscountedPrice = cartItems
    .reduce(
      (accumulator, item) =>
        accumulator +
        (item.price - item.price * (item.discountPercentage / 100)) *
          item.quantity,
      0
    )
    .toFixed(1);
  const [modal, setModal] = useState(false);
  const toggleOpen = () => setModal(!modal);
  return (
    <>
      <MDBModal
        animationDirection="top"
        open={modal}
        tabIndex="-1"
        setOpen={setModal}
      >
        <MDBModalDialog position="top" frame>
          <MDBModalContent>
            <MDBModalBody>
              <div className=" justify-content-center align-items-center">
                <p className="mb-0">Your order below has been placed!!</p>
                <MDBListGroup dark style={{ margin: "10px" }}>
                  {cartItems.map((item) => {
                    return (
                      <MDBListGroupItem>
                        <Row>
                          <Col lg={7}>{item.title}</Col>
                          <Col lg={2}>
                            <MDBBadge pill light>
                              {item.quantity}
                            </MDBBadge>
                          </Col>
                          <Col lg={3}>${item.price * item.quantity}</Col>
                        </Row>
                      </MDBListGroupItem>
                    );
                  })}
                </MDBListGroup>
              </div>
            </MDBModalBody>
            <MDBModalFooter
              style={{ backgroundColor: "#9acf9b", color: "white" }}
              className="d-flex justify-content-between"
            >
              <MDBBtn
                color="success"
                size="sm"
                className="ms-2"
                onClick={() => {
                  toggleOpen();
                  dispatch(emptyCartAction());
                }}
              >
                Ok, thanks
              </MDBBtn>
              <p>Total price is ${totalDiscountedPrice}</p>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
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
              <MDBCardHeader>
                <Row>
                  <Col lg={7}>Cost</Col>
                  <Col lg={2}>Actual</Col>
                  <Col lg={3}>Discounted</Col>
                </Row>
              </MDBCardHeader>
              <MDBListGroup flush>
                {cartItems.map((item) => {
                  return (
                    <MDBListGroupItem>
                      <Row>
                        <Col lg={4}>
                          <span>{item.title}</span>
                        </Col>
                        <Col lg={3}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <MDBBadge
                              pill
                              light
                              style={{ cursor: "pointer" }}
                            >
                              <i
                                className="fa-solid fa-plus"
                                onClick={() =>
                                  dispatch(
                                    updateQuantityAction(
                                      item.id,
                                      item.quantity === item.stock
                                        ? item.quantity
                                        : item.quantity + 1
                                    )
                                  )
                                }
                              />
                            </MDBBadge>
                            <p style={{ margin: "7px" }}>{item.quantity}</p>
                            <MDBBadge
                              pill
                              light
                              style={{ cursor: "pointer" }}
                            >
                              <i
                                className="fa-solid fa-minus"
                                onClick={() =>
                                  dispatch(
                                    updateQuantityAction(
                                      item.id,
                                      item.quantity === 1
                                        ? 1
                                        : item.quantity - 1
                                    )
                                  )
                                }
                              />
                            </MDBBadge>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <span style={{ color: "#db5c5c" }}>
                            {"$" + item?.price * item.quantity}
                          </span>
                        </Col>
                        <Col lg={3} style={{ color: "#45d076" }}>
                          {"$" +
                            (
                              (item.price -
                                item.price * (item.discountPercentage / 100)) *
                              item.quantity
                            ).toFixed(1)}
                        </Col>
                      </Row>
                    </MDBListGroupItem>
                  );
                })}
                <MDBListGroupItem color="dark">
                  <Row>
                    <Col lg={7}>
                      <span>Total</span>
                    </Col>
                    <Col lg={2}>
                      <span style={{ color: "#db5c5c" }}>
                        {"$" + totalPrice}
                      </span>
                    </Col>
                    <Col lg={3}>
                      <span style={{ color: "#45d076" }}>
                        {"$" + totalDiscountedPrice}
                      </span>
                    </Col>
                  </Row>
                </MDBListGroupItem>
                <MDBListGroupItem color="success">
                  Hurray!! You saved $
                  {(totalPrice - totalDiscountedPrice).toFixed(1)}
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
            <MDBBtn
              style={{ marginLeft: "200px", marginTop: "20px" }}
              onClick={toggleOpen}
            >
              Confirm Order
            </MDBBtn>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Cart;
