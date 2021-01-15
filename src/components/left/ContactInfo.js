import React, { Component } from "react";
import { Form, FormGroup, Input, Row, Col } from "reactstrap";

export default class ContactInfo extends Component {
  render() {
    return (
      <Form>
        <Row className="container-fluid co-title-row">
          <h4>Contact Information</h4>
        </Row>
        <div>
          <FormGroup>
            <Input
              type="text"
              name="email"
              id="coContactEmail"
              placeholder="Email"
              noValidate
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="phone"
              id="coContactPhone"
              placeholder="Phone Number"
              noValidate
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="co_first_name"
                  id="coFirstName"
                  placeholder="First name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="co_last_name"
                  id="coLastName"
                  placeholder="Last name"
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Form>
    );
  }
}
