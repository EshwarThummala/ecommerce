import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBadge
  } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

const Navigation = ({ children, setShop, setNavState }) => {
  const cartItems = useSelector(state => state.cartItems)
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="dark" className="fixed-top">
        <MDBContainer fluid>
          <MDBNavbarNav>
          <MDBNavbarItem>
              <MDBNavbarLink onClick={() => setShop(false)}>
              <MDBIcon icon="home" style={{ color: "white" }} />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-auto" onClick={() => setNavState("CART")}>
              <MDBNavbarLink>
                <MDBBadge pill color="danger">
                  {cartItems.length}
                </MDBBadge>
                <span>
                <MDBIcon fas icon="shopping-cart" style={{ color: "white" }}/>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      {children}
    </div>
  );
};

export default Navigation;
