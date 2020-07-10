import React, { useState } from "react";
import { connect } from "react-redux";
import { selectNotesByCategory } from "../store/selectors";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col } from "react-bootstrap";
import { deleteNote } from "./../store/actions";
import NoteForm from "./NoteForm";

function NotesList(props) {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({});

  const handleEdit = (note) => {
    setNote(note);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <ListGroup>
        {props.notes.length > 0
          ? props.notes.map((note) => (
              <ListGroup.Item key={note.id}>
                <Container>
                  <Row>
                    <Col lg="10" md="10" sm="10" xs="8">
                      {note.description}
                    </Col>
                    <Col lg="1" md="1" sm="1" xs="2">
                      <span
                        className="material-icons pointer edit"
                        onClick={() => handleEdit(note)}
                      >
                        create
                      </span>
                    </Col>
                    <Col lg="1" md="1" sm="1" xs="2">
                      <span
                        className="material-icons pointer delete"
                        onClick={() => props.deleteNote(note.id)}
                      >
                        delete
                      </span>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            ))
          : "Add a note"}
      </ListGroup>
      {show && (
        <NoteForm show={show} mode={"edit"} note={note} onClose={handleClose} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const notes = selectNotesByCategory(state);
  return { notes };
};

export default connect(mapStateToProps, { deleteNote })(NotesList);
