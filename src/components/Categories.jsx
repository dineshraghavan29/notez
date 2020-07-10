import React from "react";
import { connect } from "react-redux";
import { changeCategory } from "../store/actions";
import Dropdown from "react-bootstrap/Dropdown";

function Categories(props) {
  const handleCategoryChange = (category) => {
    props.changeCategory(category);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.currentCategory.description}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.categories.map((category) => (
            <Dropdown.Item
              key={category.id}
              onClick={() => handleCategoryChange(category)}
            >
              {category.description}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { categories, currentCategory } = state.notes;
  return { categories, currentCategory };
};

export default connect(mapStateToProps, { changeCategory })(Categories);
