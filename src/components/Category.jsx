import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductByCategory } from "../API/api";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const Category = ({ category, dispatch }) => {
  const categoryItems = useSelector(
    (state) => state.categoryStore.itemsBasedOnCategory[category]
  );
  if (category && !categoryItems) {
    getProductByCategory(category, dispatch);
  }
  return !category ? (
    <div
      className="alert alert-light"
      role="alert"
      style={{ textAlign: "center" }}
    >
      Explore our curated categories and discover your next obsession.
    </div>
  ) : !categoryItems ? (
    <div
      className="alert alert-light"
      role="alert"
      style={{ textAlign: "center" }}
    >
      Looks like this category is empty.
    </div>
  ) : (
    <Row style={{ marginTop: 10 }}>
      {categoryItems.map((product) => (
        <Col lg={3} md={8} xs={12} style={{ marginTop: 20 }}>
          <Product key={product.id} product={product} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
};

export default Category;
