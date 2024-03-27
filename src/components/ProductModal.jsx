import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

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
                <MDBCarouselItem itemId={index+1}>
                  <img
                    src={image}
                    className='w-100 d-block'
                    alt="..."
                  />
                </MDBCarouselItem>
              ))}
            </MDBCarousel>
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
