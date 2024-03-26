import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../API/api";
import Navigation from "./Navigation";
import Cart from "./Cart";
import ShopHome from "./ShopHome";


const Shop = ({ setShop }) => {
  const dispatch = useDispatch();
  const [ navState, setNavState ] = useState();
  useEffect(() => {
    getAllProducts("12", dispatch);
  }, []);
  let content = null;
  switch (navState) {
    case "CART":
      content = <Cart dispatch={dispatch} />
      break
    default:
      content = <ShopHome dispatch={dispatch}/>
  }
  return (
    <Navigation setShop={setShop} setNavState={setNavState}>
      <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 70 }}>
        {content}
      </div>
    </Navigation>
  );
};
export default Shop;
