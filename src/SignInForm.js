import React from "react";
import {
  Form,
  Spinner,
  Navbar,
  InputGroup,
  Button,
  FormControl
} from "react-bootstrap";
// Where I got the components from : https://react-bootstrap.github.io/components/alerts/

class SignInForm extends React.Component {
  render() {
    return (
      <div className="signindiv">
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Navbar>
        <h2 className="sign-in-header">LOGIN</h2>
        <Form className="signInForm">
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
}

export default SignInForm;
