import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Fields = () => {
  return (
    <Container>
      <Row className='pb-3 d-flex justify-content-center align-items-center'>
        <Col>
          <h3>Puzzle Level</h3>
        </Col>
        <Col>
          <Form.Control type='text' id='inputLvl' />
        </Col>
      </Row>
    </Container>
  );
};

export default Fields;
