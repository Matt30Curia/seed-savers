import { Col, Row } from "react-bootstrap"
import logo from "../assets/logo.png"
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer  py-5">
      <Row className="align-items-center mx-5">
        <Col md={3} style={{ marginLeft: 30 }} className="align-items-center">
          <img
            height="130"
            src={logo} alt=""
          />
          <br />
          <h3 style={{marginLeft:10}}>Seed Swap</h3>
        </Col>
        <Col md={3}>
          esplora le nosre varietà di:
          <br /><a href="">pomodoro</a>
          <br /><a href="">zucca</a>
          <br /><a href="">melanzana</a>
          <br /><a href="">insalata</a>
          <br /><a href="">aromatiche</a>
        </Col>
        <Col md={3}>
          risorse:
          <br /><a href="">come coltivare l'orto</a>
          <br /><a href="">video utili</a>
          <br /><a href="">contatta un esperto</a>
        </Col>
        <Col >
          social:
          <br /><a href="https://www.instagram.com/"><LuInstagram size={"30"} style={{ marginTop: 10 }} /></a>
          <br /><a href="https://www.facebook.com/"><FaFacebook size={"30"} style={{ marginTop: 10 }} /></a>
          <br /><a href="https://www.linkedin.com/"><FaLinkedin size={"30"} style={{ marginTop: 10 }} /></a>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;