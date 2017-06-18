import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

const BotList = ({ botlist}) => (
  <Grid>
    <Row>
      {botlist.map(bot =>
        <Col key={bot._id} sm={6} md={3}>
          <Thumbnail src={"https://robohash.org/" + bot.title} alt="242x200">
            <h3>{bot.title}</h3>
            <p>{"ip: " + bot.ip}</p>
            <p>{"status: " + bot.status}</p>
            <p>
              <Button href={"/bots/" + bot._id} bsStyle="primary">remote control</Button>
            </p>
          </Thumbnail>
        </Col>
      )}
    </Row>
  </Grid>
);

BotList.propTypes = {
  botlist: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ip: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired).isRequired
}
export default BotList
