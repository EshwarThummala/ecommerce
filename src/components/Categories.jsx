import { useEffect, useState } from "react";
import { getCategories } from "../API/api";
import { useSelector } from "react-redux";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Row, Col } from "react-bootstrap";
import Category from "./Category";
import { setCategoryAction } from "../redux/actions/categoryActions";

const Categories = ({ dispatch }) => {
  const selectedCategory = useSelector(state => state.categoryStore.currentCategory)
  useEffect(() => {
    getCategories(dispatch);
  }, []);
  const categories = useSelector((state) => state.categoryStore.categories);
  return (
    <Row>
      <Col lg={2}>
        <MDBDropdown>
          <MDBDropdownMenu
            alwaysOpen
            style={{ maxHeight: "700px", overflowY: "auto" }}
          >
            <MDBDropdownItem
              header
              style={{
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              Pick a category
            </MDBDropdownItem>
            {categories.map((category) => {
              return (
                <MDBDropdownItem
                  link
                  key={category}
                  onClick={() => dispatch(setCategoryAction(category))}
                  aria-current={selectedCategory === category}
                >
                  {category}
                </MDBDropdownItem>
              );
            })}
          </MDBDropdownMenu>
        </MDBDropdown>
      </Col>
      <Col style={{ maxHeight: "700px", overflowY: "auto" }}>
            <Category category={selectedCategory} dispatch={dispatch}/>
      </Col>
    </Row>
  );
};

export default Categories;
