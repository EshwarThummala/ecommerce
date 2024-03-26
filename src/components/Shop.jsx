import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../API/api";
import Navigation from "./Navigation";
import Cart from "./Cart";
import ShopHome from "./ShopHome";
import Category from "./Category";


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
    case "SHOP":
      content = <ShopHome dispatch={dispatch}/>
      break
    case "CATEGORY":
      content = <Category dispatch={dispatch}/>
      break
    default:
      content = <ShopHome dispatch={dispatch}/>
  }
  return (
    <Navigation setShop={setShop} setNavState={setNavState} navState={navState}>
      <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 70 }}>
        {content}
      </div>
    </Navigation>
  );
};
export default Shop;
