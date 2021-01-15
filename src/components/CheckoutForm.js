import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BillingInfo from "./left/BillingInfo";
import ContactInfo from "./left/ContactInfo";
import Payment from "./left/Payment";
import ShippingAddress from "./left/ShippingAddress";
import ShippingMethod from "./left/ShippingMethod";

export default class CheckoutForm extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="left-col-container" md="6">
            <ContactInfo />
            <ShippingAddress />
            <BillingInfo />
            <ShippingMethod />
            <Payment />
          </Col>
          <Col className="right-col-container" md="6">
            <h1 style={{ backgroundColor: "yellow" }}>pershendetje</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
