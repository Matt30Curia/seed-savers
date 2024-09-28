import "../styles/card.css"
import "../styles/hero.css"
import { useNavigate } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import { SmallButton } from "./Button";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

export function CustomCard({ title, desc, img, id, onClick }) {
  const navigate = useNavigate();

  return <Card style={{ backgroundColor: "#fefae0" }} className="border-0 rounded-4">
    <Card.Img variant="top" src={img} className="rounded-4" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className="truncate">
        {desc}
      </Card.Text>
      <Row>

        <Col>
        </Col>

        <Col md={12}>
          <Button onClick={() => navigate(`/product/${id}`)} id="button">Scambia</Button>
        </Col>
      </Row>

    </Card.Body>
  </Card>
}

export function TestimonialsCards(info) {
  let cards = []
  info.forEach((elem, index) => {
    cards.push(
      <Col key={index} md={3} className=" mx-3 green-square">
        <Row>

          <Col md={12} className="review py-2">
            <p>{elem.review}</p>
          </Col>
          <Row className="mt-12 ">
            <Col md={3}>
              <img className="image mx-3" src={elem.img} alt="" />
            </Col>
            <Col md={9}>
              <p >{elem.name}</p>
            </Col>
          </Row>
        </Row>
      </Col>
    )
  });

  return cards
}

export function AmountCard({ title, amount , img }) {

  const [amu0nt, setAmount] = useState(Number(amount))

  return <Card style={{ backgroundColor: "#fefae0" }} className="border-0 rounded-4">
    <Card.Img variant="top" src={img} className="rounded-4" />
    <Card.Body>
      <Row>
        
        <Col xs={9}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Quantità rimanente: {amu0nt}
          </Card.Text>
        </Col>
        <Col className="py-2" xs={1}>
          <SmallButton onClick={() => setAmount(amu0nt +1)}> <FaPlus/> </SmallButton>
        </Col>
      </Row>

    </Card.Body>
  </Card>

}