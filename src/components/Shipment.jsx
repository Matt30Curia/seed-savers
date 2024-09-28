import { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";

function Order(data, callback){
  let order = []
  
  data.forEach((element, index )=> {
    order.push(
      <Col md={4}>
        <Card>
          <Card.Header as="h5">{element.variety}</Card.Header>
          <Card.Body>
            <Card.Title as="h6">{element.street}</Card.Title>
            <Card.Text>
              {element.name}
            </Card.Text>
            <Button onClick={() => {
            
              data.splice(index, 1)
              callback([...data])

            }} className="rounded-pill" size="sm" variant="danger">spedisci</Button>
          </Card.Body>
        </Card>
      </Col>
    )  
  });

  return order;
}


function Shipment({ data }) {

  const order = [
    {
      street:"via Roma 12",
      name: "Matteo Boccia",
      variety:"Pomodoro Giallo",
      varietyId: "4564",
      date: "2015-03-25T12:00:00Z",
    },
    {
      street: "via Roma 13",
      name: "Matteo Boccia",
      variety: "Pomodoro Giallo",
      varietyId: "4564",
      date: "2015-03-25T12:00:00Z",
    },
    {
      street: "via Roma 14",
      name: "Matteo Boccia",
      variety: "Pomodoro Giallo",
      varietyId: "4564",
      date: "2015-03-25T12:00:00Z",
    },
    {
      street: "via Roma 15",
      name: "Matteo Boccia",
      variety: "Pomodoro Giallo",
      varietyId: "4564",
      date: "2015-03-25T12:00:00Z",
    },
  ]

  const [orders, setOrders] = useState(order)

  

  return (
    <Row>
      {orders.length ? Order(orders, setOrders) : <p className="fs-5">🎉Hai eseguito tutte le consegne🎉</p>}
    </Row>
  );
}

export default Shipment