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

const Navigation = ({ children, setShop, navState, setNavState }) => {
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
            <MDBNavbarItem onClick={() => setNavState("SHOP")}>
              <MDBNavbarLink style={{ marginLeft:100, cursor: "pointer", color: navState === "SHOP" ? "white" : "#868984" }}>
                SHOP
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem onClick={() => setNavState("CATEGORY")}>
              <MDBNavbarLink style={{ marginLeft:50, color: navState === "CATEGORY" ? "white" : "#868984", cursor: "pointer" }}>
                CATEGORIES
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
