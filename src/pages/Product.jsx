import { Row, Col, Container, Button, DropdownButton, DropdownItem } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "../styles/product.css"
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"

function Product() {

  const { id } = useParams();

  //temp var
  const title = "Pomodoro Nero"
  const description = "pomodoro dal gusto straordinario e molto vigoroso, resiste alla peronospora ed alla siccità."

  return (
    <>
      <Navbar />
      <Container className="mb-5">
        <Row>
          <Col md={8} > <img className="p-image" src="https://images.unsplash.com/photo-1647134619933-452c43b63970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Col>
          <Col md={4} style={{ marginTop: 60 }}>
            <h1 className="mb-4">{title}</h1>
            <p>{description}</p>
            <DropdownButton  variant="success" title={"seleziona appassionato"}>
              <DropdownItem>Ernesto | 50 🍅</DropdownItem>
              <DropdownItem>Ernesto | 50 🍅</DropdownItem>
              <DropdownItem>Ernesto | 50 🍅</DropdownItem>
              <DropdownItem>Ernesto | 50 🍅</DropdownItem>
            </DropdownButton>
            <Button className="w-20" style={{ margin: "20px 10px 0 0" }} id="button">Ordina</Button>

            <Button className="w-80" style={{ marginTop: 20 }} id="button">🗨️ chiedi consigli</Button>
          </Col>

        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Product