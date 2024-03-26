import { useEffect } from "react";
import { storeHomeProductsAction } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../API/api";
import Product from "./Product";
import { Row, Col, Container } from "react-bootstrap";

const Shop = ({ setShop }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts("12", dispatch);
  }, []);
  const homeProducts = useSelector((state) => state.productStore.products);
  return (
    <div style={{ padding: 20 }}>
      <h1>Shop Page</h1>
      <button onClick={() => setShop(false)}>Go to Home</button>
      {homeProducts.length == 0 ? (
        <p>Loading Data</p>
      ) : (
        <Row style={{ marginTop: 10 }}>
          {homeProducts.map((product) => (
            <Col lg={2} md={8} xs={12} style={{ marginTop: 20 }}>
              <Product key={product.id} product={product} dispatch={dispatch} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Shop;
