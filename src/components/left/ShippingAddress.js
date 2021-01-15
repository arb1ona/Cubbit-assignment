import React, { Component } from "react";
import Toggle from "../Toggle";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";
import PlusIcon from "../../assets/images/_ionicons_svg_md-add.png";
import CountryOptions from "./input_options/countryOptions";

export default class ShippingAddress extends Component {
  render() {
    return (
      <div>
        <Row className="container-fluid co-title-row mb-4">
          <h4>Shipping Address</h4>
        </Row>
        <FormGroup>
          <Input
            type="text"
            name="co_address"
            id="coAddress"
            placeholder="Street Address"
          />
        </FormGroup>
        <FormGroup>
          <Toggle>
            {({ on, off, toggle }) => (
              <div className="toggle-container address2-text">
                {on && (
                  <Input
                    type="text"
                    name="co_address2"
                    id="coAddress2"
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                )}
                {off && (
                  <div onClick={toggle}>
                    <p className="p-xs">
                      <img
                        className="toggle-ico"
                        src={PlusIcon}
                        alt="expand icon"
                      />{" "}
                      Add Address line 2
                    </p>
                  </div>
                )}
              </div>
            )}
          </Toggle>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                className="zip-input"
                type="text"
                name="co_postalcode"
                id="coPostalCode"
                placeholder="Postal Code"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="dropdown-container">
              <CountryOptions />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup className="dropdown-container">
              <Input
                type="text"
                name="co_city"
                id="coCity"
                placeholder="City"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                className="zip-input"
                type="text"
                name="co_zipcode"
                id="coZipCode"
                placeholder="State/Region/Province"
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
