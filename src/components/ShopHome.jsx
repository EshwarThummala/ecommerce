import { useSelector } from "react-redux";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const ShopHome = ({ dispatch }) => {
  const homeProducts = useSelector((state) => state.productStore.products);
  const searchItem = useSelector((state) => state.productStore.searchItem);
  const searchResults = useSelector(
    (state) => state.productStore.currentSearchItems
  );
  console.log(searchItem);
  return (
    <>
      <div
        class="alert alert-dark"
        role="alert"
        style={{ textAlign: "center", margin: "20px 0px 0px 400px", padding: "10px", width:"50%" }}
      >
        Shop till you drop, then shop some more.
      </div>
      <Row style={{ marginTop: 10 }}>
        {searchItem === "" ? (
          homeProducts.map((product) => (
            <Col lg={2} md={8} xs={12} style={{ marginTop: 20 }}>
              <Product key={product.id} product={product} dispatch={dispatch} />
            </Col>
          ))
        ) : searchResults.length === 0 ? (
          <div
          className="alert alert-light"
          role="alert"
          style={{ textAlign: "center", marginTop: "100px" }}
        >
          Opps, No search results for the product : {searchItem}
        </div>
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
