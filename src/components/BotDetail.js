import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';


const BotDetail = ({bot}) => {
  if(!bot){
    return <div></div>;
  }
  console.log("bot",bot);
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}><h1>{bot.title}</h1></Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={8}>text</Col>
        <Col xs={6} md={4}><Image src={bot.detailImage} circle /></Col>
      </Row>
    </Grid>
  );
};

export default BotDetail;
