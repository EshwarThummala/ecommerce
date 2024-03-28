import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../API/api";
import Navigation from "./Navigation";
import Cart from "./Cart";
import ShopHome from "./ShopHome";
import Categories from "./Categories";

const Shop = ({ setShop }) => {
  const dispatch = useDispatch();
  const [ navState, setNavState ] = useState("SHOP");
  useEffect(() => {
    getAllProducts("20", dispatch);
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
      content = <Categories dispatch={dispatch}/>
      break
    default:
      content = <ShopHome dispatch={dispatch}/>
  }
  return (
    <Navigation setShop={setShop} setNavState={setNavState} navState={navState} dispatch={dispatch}>
      <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 70}}>
        {content}
      </div>
    </Navigation>
  );
};
export default Shop;
