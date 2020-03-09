import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextInput from './TextInput'

const Main = (props) => {
  return (
    <Container>
      <Row className="topic-header">
        <Col sm="3">
        <h4>Before Her</h4>
          <TextInput />
          {/* <button className="buttons">⇦ Before Her</button> */}
        </Col>
        <Col sm="6" >
          <h4>Topic of the Day</h4>
          <TextInput style={{height: "200px"}}/>
        </Col>
        <Col sm="3" >
        <h4>After Her</h4>
          <TextInput />
        {/* <button className="buttons">After Her ⇨</button> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Main;