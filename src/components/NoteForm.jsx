import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormCategories from "./FormCategories";
import { addNote, updateNote } from "../store/actions";
import { selectCategories } from "./../store/selectors";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

function NoteForm(props) {
  const [note, setNote] = useState("");
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (props.mode === "edit") {
      setNote(props.note.description);
      const defaultCategory = props.categories.filter(
        (category) => category.id === props.note.categoryId
      );
      setCategory(defaultCategory[0]);
    }
  }, []);

  const handleClose = () => {
    setNote("");
    props.onClose();
  };

  const handleNote = (e) => setNote(e.target.value);
  const handleCategoryChange = (category) => setCategory(category);

  const handleSubmit = () => {
    if (note === "" || Object.keys(category).length === 0) return;
    if (props.mode === "create")
      props.addNote({ note: note, category: category });
    if (props.mode === "edit")
      props.updateNote({ id: props.note.id, note: note, category: category });
    setNote("");
    props.onClose();
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.mode === "create" ? "Add Note" : "Edit Note"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col>
                <h6>Category</h6>
                <FormCategories
                  category={category}
                  onChange={handleCategoryChange}
                />
              </Col>
              <Col>
                <h6>Note</h6>
                <input type="text" value={note} onChange={handleNote} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  const categories = selectCategories(state);
  return { categories };
};

export default connect(mapStateToProps, { addNote, updateNote })(NoteForm);
