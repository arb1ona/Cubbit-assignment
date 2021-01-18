import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "./left/ContactInfo";
import Cart from "./right/Cart";

export default class CheckoutForm extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="left-col-container" md="6">
            <ContactInfo />
          </Col>
          <Col className="right-col-container" md="6">
            <Cart style={{ backgroundColor: "yellow" }} />
          </Col>
        </Row>
      </Container>
    );
  }
}
