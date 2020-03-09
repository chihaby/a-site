import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextInput from './TextArea'

const Main = (props) => {
  return (
    <Container>
      <Row className="topic-header">
        <Col xs="3" >
        <h4>Before Her</h4>
          <TextInput />
          {/* <button className="buttons">⇦ Before Her</button> */}
        </Col>
        <Col xs="6" >
          <h4>Topic of the Day</h4>
          <TextInput />
        </Col>
        <Col xs="3" >
        <h4>After Her</h4>
          <TextInput />
        {/* <button className="buttons">After Her ⇨</button> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Main;