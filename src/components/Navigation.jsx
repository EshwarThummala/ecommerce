import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateSearchItemAction } from "../redux/actions/productsActions";
import { getProductsBySearch } from "../API/api";

const Navigation = ({ children, setShop, navState, setNavState, dispatch }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const storeSearchItem = useSelector((state) => state.productStore.searchItem);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getProductsBySearch(dispatch, storeSearchItem);
  }, [storeSearchItem]);
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
              <MDBNavbarLink
                style={{
                  marginLeft: 100,
                  cursor: "pointer",
                  color: navState === "SHOP" ? "white" : "#868984",
                }}
              >
                SHOP
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem onClick={() => setNavState("CATEGORY")}>
              <MDBNavbarLink
                style={{
                  marginLeft: 50,
                  color: navState === "CATEGORY" ? "white" : "#868984",
                  cursor: "pointer",
                }}
              >
                CATEGORIES
              </MDBNavbarLink>
            </MDBNavbarItem>
            {navState === "SHOP" && <MDBInputGroup
              tag="form"
              className="d-flex w-auto mb-3"
              style={{
                marginLeft: 50,
                color: "white",
              }}
            >
              <input
                className="form-control"
                placeholder="Search for product"
                aria-label="Search"
                type="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <MDBBtn
                outline
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(updateSearchItemAction(searchValue))
                }}
              >
                Search
              </MDBBtn>
            </MDBInputGroup>}
            <MDBNavbarItem
              className="ms-auto"
              onClick={() => setNavState("CART")}
            >
              <MDBNavbarLink>
                <MDBBadge pill color="danger">
                  {cartItems.length}
                </MDBBadge>
                <span>
                  <MDBIcon
                    fas
                    icon="shopping-cart"
                    style={{ color: "white" }}
                  />
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
