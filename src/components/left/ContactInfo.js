import React, { Component } from "react";
import { Form, FormGroup, Input, Row, Col, Button } from "reactstrap";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      phone: null,
      firstName: null,
      lastName: null,
      formErrors: {
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
      --SUBMITTING--
      Email: ${this.state.email}
      Phone: ${this.state.phone}
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}

      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

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
        formErrors.firstName =
          value.length < 10 ? "minimum 3 characaters required" : "";
        break;
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="container-fluid co-title-row">
          <h4>Contact Information</h4>
        </Row>
        <div>
          <FormGroup>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              noValidate
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              noValidate
              onChange={this.handleChange}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="firstName"
                  id="coFirstName"
                  placeholder="First name"
                  noValidate
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  noValidate
                  onChange={this.handleChange}
                />
              </FormGroup>
              <div className="buyNow">
                <Button color="primary" type="submit">
                  Buy Now
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Form>
    );
  }
}
