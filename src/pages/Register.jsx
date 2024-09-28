import "../styles/login.css";
import NavBar from "../components/NavBar";

import { Form, Button, Container } from 'react-bootstrap';
import { PiUserBold } from "react-icons/pi";


function Register() {
  return (
    <>
      <NavBar />
      <Container className="registration-form">
        <Form>
          <div class="form-icon">
            <PiUserBold />
          </div>
          <Form.Group className="p-3">
            Register
          </Form.Group>
          <Form.Group>
            <Form.Control className="form-control item" type="text" id="username" placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control className="form-control item" type="password" id="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Control className="form-control item" type="text" id="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control className="form-control item" type="text" id="phone-number" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group>
            <Button className="create-account" variant="primary" type="button" block>Create Account</Button>
          </Form.Group>
        </Form>

      </Container>
    </>
  )
}

export default Register;
