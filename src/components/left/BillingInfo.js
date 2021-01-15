import React, { Component } from "react";
import {
  Alert,
  Button,
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Toggle from "../Toggle";
import CountryOptions from "./input_options/countryOptions";
// import StateOptions from "./input_options/stateOptions";
import PlusIcon from "../../assets/images/_ionicons_svg_md-add.png";

export default class BillingInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  hideContent = () => {
    this.setState({
      checked: false,
    });
  };

  render() {
    const content = this.state.checked ? (
      <Form>
        <Toggle>
          {({ on, off, toggle }) => (
            <div className="toggle-container">
              {/* {on && (
                <div>
                  <Alert color="success">
                    You contact info has been saved.
                  </Alert>
                  <div className="button-right">
                    <Button onClick={toggle} color="secondary">
                      Edit
                    </Button>
                  </div>
                </div>
              )} */}
              {off && (
                <div>
                  <FormGroup>
                    <Input
                      type="text"
                      name="co_bil_address"
                      id="coBillAddress"
                      placeholder="Address"
                    />
                  </FormGroup>
                  {/* <FormGroup>
                    <Toggle>
                      {({ on, off, toggle }) => (
                        <div className="toggle-container address-text">
                          {on && (
                            <Input
                              type="text"
                              name="co_bil_address2"
                              id="coBillAddress2"
                              placeholder="Apartment, suite, etc. (optional)"
                            />
                          )}
                          {off && (
                            <div onClick={toggle}>
                              <p>
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
                  </FormGroup> */}

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
                  {/* <div className="button-right">
                    <Button onClick={toggle} color="primary">
                      Save
                    </Button>
                  </div> */}
                </div>
              )}
            </div>
          )}
        </Toggle>
      </Form>
    ) : null;

    return (
      <div className="billing-container">
        <Row className="container-fluid co-title-row mb-4">
          <h4>Billing Information</h4>
        </Row>

        <ListGroup>
          <Container>
            <Row>
              <p>
                Please provide us with your billing information, so we can send
                you an invoice after order confirmation.
              </p>
            </Row>
          </Container>
          <FormGroup tag="fieldset">
            <ListGroupItem>
              <FormGroup check>
                <Input
                  type="radio"
                  name="coBillingSelection"
                  onChange={this.hideContent}
                  defaultChecked
                />
                <Container>
                  <Row className="container-fluid">
                    <h6>Same as shipping address</h6>
                  </Row>
                </Container>
              </FormGroup>
            </ListGroupItem>
            <ListGroupItem>
              <FormGroup check>
                <Input
                  type="radio"
                  name="coBillingSelection"
                  checked={this.state.checked}
                  onChange={this.handleChange}
                />
                <Container>
                  <Row>
                    <h6>Use a different billing address</h6>
                  </Row>
                </Container>
              </FormGroup>
            </ListGroupItem>
          </FormGroup>
        </ListGroup>
        {content}
      </div>
    );
  }
}
