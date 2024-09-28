import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import Shipment from "../components/shipment";
import MessagesCard from "../components/MessagesCard";
import Varieties from "../components/Varieties";
import AddVariety from "../components/AddVariety";
import { useState } from "react";

function Profile() {

  const name = "Matteo";
  const [varieties, setVarieties] = useState([]);

  console.log(varieties)

  return (
    <>
      <NavBar />
      <Container>
        <Col className="mb-5">

          <Row >
            <h1 className="my-5">Benvenuto {name}</h1>
          </Row>

          <Row className="my-2">
            <h5>Varieta da spedire</h5>
            <Shipment data={{}} />
          </Row>

          <Row className="my-5">
            <h5> Messaggi </h5>
            <MessagesCard data={{}} />
          </Row>

          <Row>
            <Col xs={10}><h5> Le tue varietà </h5> </Col>
            <Col xs={1}>
              <AddVariety setVarieties={setVarieties} />
            </Col>
            <Col className="mt-4">
              <p className="fs-5">{varieties.length != 0 ? <Varieties data={varieties} /> : "😞Non hai ancora cotribuito, posta le tue varietà per ottenere crediti per fare scambi😞"}</p>
            </Col>
          </Row>

        </Col>
      </Container>

    </>
  )

}

export default Profile