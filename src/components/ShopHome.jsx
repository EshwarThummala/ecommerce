import { useSelector } from "react-redux";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const ShopHome = ({ dispatch }) => {
  const homeProducts = useSelector((state) => state.productStore.products);
  const searchItem = useSelector((state) => state.productStore.searchItem);
  const searchResults = useSelector(
    (state) => state.productStore.currentSearchItems
  );
  console.log(searchItem)
  return (
    <>
      <h3>Shop to your liking...</h3>
      <Row style={{ marginTop: 10 }}>
        {searchItem === '' ? (
          homeProducts.map((product) => (
            <Col lg={2} md={8} xs={12} style={{ marginTop: 20 }}>
              <Product key={product.id} product={product} dispatch={dispatch} />
            </Col>
          ))
        ) : searchResults.length === 0 ? (
          <h1>No Results</h1>
        ) : (
          <>
            <h1>{searchResults.length} Results</h1>
            {searchResults.map((product) => (
              <Col lg={2} md={8} xs={12} style={{ marginTop: 20 }}>
                <Product
                  key={product.id}
                  product={product}
                  dispatch={dispatch}
                />
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};

export default ShopHome;
