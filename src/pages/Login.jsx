import "../styles/login.css";
import NavBar from "../components/NavBar";

import { Form, Button, Container } from 'react-bootstrap';
import { PiUserBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Container className="registration-form">
        <Form>
          <div class="form-icon">
            <PiUserBold />
          </div>
          <Form.Group className="p-3">
            Login
          </Form.Group>
          <Form.Group>
            <Form.Control className="form-control item" type="text" id="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control className="form-control item" type="password" id="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Button onClick={() => navigate("/profile")} className="create-account w-100" variant="primary" type="button" block>Login</Button>
          </Form.Group>

          <Form.Group className="p-3">
            Non hai un account  <Link to="/register"> registrati</Link>
          </Form.Group>

        </Form>

      </Container >
    </>
  )
}

export default Login;
