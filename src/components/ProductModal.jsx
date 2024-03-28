import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Row, Col } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const ProductModal = ({ showModal, setShowModal, product }) => {
  const toggleOpen = () => setShowModal(!showModal);

  return (
    <MDBModal tabIndex="-1" open={showModal} setOpen={setShowModal}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{product.title}</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleOpen}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBCarousel showIndicators showControls dark fade>
              {product.images.map((image, index) => (
                <MDBCarouselItem itemId={index + 1}>
                  <img src={image} className="w-100 d-block" alt="..." />
                </MDBCarouselItem>
              ))}
            </MDBCarousel>
          </MDBModalBody>
          <MDBModalBody>
            <MDBListGroup dark style={{ margin: "5px" }}>
              <MDBListGroupItem>
                <Row>
                  <Col lg={4}>
                    <b>Product Id : </b>
                    {product.id}
                  </Col>
                  <Col>
                    <b>Rating : </b>
                    <span style={{marginRight: "10px"}}>{product.rating}</span>
                    {Array(Math.round(product.rating))
                      .fill()
                      .map(() => (
                        <i
                          style={{ margin: "2px" }}
                          className="fa-solid fa-star"
                        />
                      ))}
                  </Col>
                </Row>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <Row>
                  <Col>
                    <b>Name : </b>
                    {product.title}
                  </Col>
                  <Col>
                    <b>Brand : </b>
                    {product.brand}
                  </Col>
                </Row>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <Row>
                  <Col lg={6}>
                    <b>Price : $</b>
                    {product.price -
                      product.price *
                        (product.discountPercentage / 100).toFixed(1)}
                  </Col>
                  <Col>
                    <b>Stock : </b>
                    {product.stock}
                  </Col>
                </Row>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <Row>
                  <Col>
                    <b>Description : </b>
                    {product.description}
                  </Col>
                </Row>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <Row>
                  <Col>
                    <b>Category : </b>
                    {product.category}
                  </Col>
                </Row>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleOpen}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ProductModal;
