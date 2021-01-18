import React, { Component } from "react";
import { Form, FormGroup, Input, Row, Col, Button } from "reactstrap";
import Toggle from "../Toggle";
import PlusIcon from "../../assets/images/_ionicons_svg_md-add.png";
import CountryOptions from "./input_options/countryOptions";
import { emailRegex, formValid } from "../services/inputValidator";
import BillingInfo from "./BillingInfo";

export default class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      phone: null,
      firstName: null,
      lastName: null,
      address: null,
      address2: "",
      postalCode: null,
      city: null,
      state: null,
      formErrors: {
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        address: "",
        postalCode: "",
        city: "",
        state: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      CONTACT INFO
      Email: ${this.state.email}
      Phone: ${this.state.phone}
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      
      SHIPPING ADDRESS
      Street address: ${this.state.address}
      Optional address: ${this.state.address2}
      PostalCode: ${this.state.postalCode}
      City: ${this.state.city}
      State: ${this.state.state}
  
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    // console.log("Name: ", name);
    // console.log("Value", value);

    //else if
    switch (name) {
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email address";
        break;
      case "phone":
        formErrors.phone = value.length < 10 ? "invalid phone number" : "";
        break;
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "address":
        formErrors.address =
          value.length < 3 ? "Street address is required" : "";
        break;
      case "postalCode":
        formErrors.postalCode =
          value.length < 3 ? "Postal code is required" : "";
        break;
      case "city":
        formErrors.city = value.length < 3 ? "City is required" : "";
        break;
      case "state":
        formErrors.state =
          value.length < 3 ? "State/Region/Province is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    //it keeps changing everytime
    const { formErrors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        {/* --------------------------CONTACT INFORMATION--------------------------------- */}

        <Row className="container-fluid co-title-row">
          <h4>Contact Information</h4>
        </Row>
        <div>
          <FormGroup>
            <Input
              className={formErrors.email.length > 0 ? "error" : null}
              type="text"
              name="email"
              placeholder="Email"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </FormGroup>
          <FormGroup>
            <Input
              className={formErrors.phone.length > 0 ? "error" : null}
              type="text"
              name="phone"
              placeholder="Phone Number"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.phone.length > 10 && (
              <span className="errorMessage">{formErrors.phone}</span>
            )}
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
        </div>
        {/* ---------------------CONTACT INFORMATION END--------------------------------------- */}

        {/* ------------------------------------SHIPPING ADDRESS----------------------------------------------------------              */}
        <Row className="container-fluid co-title-row mb-4">
          <h4>Shipping Address</h4>
        </Row>
        <FormGroup>
          <Input
            className={formErrors.address.length > 0 ? "error" : null}
            type="text"
            name="address"
            placeholder="Street Address"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.address.length > 0 && (
            <span className="errorMessage">{formErrors.address}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Toggle>
            {({ on, off, toggle }) => (
              <div className="toggle-container address2-text">
                {on && (
                  <Input
                    type="text"
                    name="address2"
                    placeholder="Apartment, entry, etc. (optional)"
                    onChange={this.handleChange}
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
                      Add Optional Address
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
                className={formErrors.postalCode.length > 0 ? "error" : null}
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                onChange={this.handleChange}
              />
              {formErrors.postalCode.length > 0 && (
                <span className="errorMessage">{formErrors.postalCode}</span>
              )}
            </FormGroup>
          </Col>
          {/* <Col md={6}>
            <FormGroup className="dropdown-container">
              <CountryOptions onChange={this.handleChange} />
            </FormGroup>
          </Col> */}
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup className="dropdown-container">
              <Input
                className={formErrors.city.length > 0 ? "error" : null}
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                className={formErrors.state.length > 0 ? "error" : null}
                type="text"
                name="state"
                placeholder="State/Region/Province"
                onChange={this.handleChange}
              />
              {formErrors.state.length > 0 && (
                <span className="errorMessage">{formErrors.state}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        {/* ---------------------------END OF SHIPPING ADDRESS------------------------------------------------------------ */}
        <BillingInfo
          handleChange={this.handleChange}
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          postalCode={this.state.postalCode}
        />

        <div className="buyNow">
          <Button disabled={!formValid} color="primary" type="submit">
            Buy Now
          </Button>
        </div>
      </Form>
    );
  }
}
