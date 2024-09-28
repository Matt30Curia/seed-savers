import { Col, Row, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "../styles/functionality.css";

function About(){
  const navigate = useNavigate()

  return(
    <Row className="mx-2 my-5">
      
      <Col md={4} >
        <h1  >mission</h1>
      </Col>
      <Col md={6}>
        <p className="p-large">
          La nostra missione è salvaguardare le varietà di ortive attraverso la diffusione delle sementi. Crediamo che la biodiversità sia essenziale per creare un'agricoltura sostenibile e resiliente. Promuovendo lo scambio di semi, aiutiamo a differenziare le colture. Il nostro obiettivo è fornire una piattaforma che supporti gli appassionati di giardinaggio e agricoltura, facilitando la condivisione di conoscenze e risorse per preservare la ricchezza genetica delle piante e promuovere un'agricoltura indipendente dalle grandi aziende sementiere.
        </p>
        <Button onClick={() => navigate("/shop")} id= "button" style={{margin:0}}>Inizia lo scambio</Button>
      </Col>
    </Row>
  )
}

export default About;