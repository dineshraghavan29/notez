import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Categories from "./Categories";
import NotesList from "./NotesList";
import NoteForm from "./NoteForm";

export default function MainContainer() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <Row className="justify-content-md-center p-10">
        <Col lg="2" md="4" sm="6" xs="6">
          <Categories />
        </Col>
        <Col lg="2" md="4" sm="6" xs="6">
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
          {show && (
            <NoteForm show={show} mode={"create"} onClose={handleClose} />
          )}
        </Col>
      </Row>
      <Row className="justify-content-md-center p-10">
        <Col lg="10" md="10" sm="12" xs="12">
          <NotesList />
        </Col>
      </Row>
    </Container>
  );
}
