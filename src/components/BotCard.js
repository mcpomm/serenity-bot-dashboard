import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const Example = (props) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}><h1>Ragnar</h1></Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={8}>text</Col>
        <Col xs={6} md={4}><Image src="https://robohash.org/ragnar.png?bgset=bg2" circle /></Col>
      </Row>
    </Grid>
  );
};

export default Example;
