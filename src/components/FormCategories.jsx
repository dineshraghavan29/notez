import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { selectCategories } from "./../store/selectors";

function FormCategories(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.category.description}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.categories.map((category) => (
          <Dropdown.Item
            key={category.id}
            onClick={() => props.onChange(category)}
          >
            {category.description}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const mapStateToProps = (state) => {
  const categories = selectCategories(state);
  return { categories };
};

export default connect(mapStateToProps)(FormCategories);
