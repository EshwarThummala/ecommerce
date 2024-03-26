import { useSelector } from "react-redux";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const ShopHome = ({ dispatch }) => {
  const homeProducts = useSelector((state) => state.productStore.products);
  return (
    <>
      <h3>Shop to your liking...</h3>
      <Row style={{ marginTop: 10 }}>
        {homeProducts.map((product) => (
          <Col lg={2} md={8} xs={12} style={{ marginTop: 20 }}>
            <Product key={product.id} product={product} dispatch={dispatch} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ShopHome;
