import { Card, Button, Row, Col } from "react-bootstrap";
import Chat from "./Chat";
import { useState } from "react";

function MessagesCards(data, setMessages) {
  let messages = []

  data.forEach((element, index) => {
    messages.push(
      <Col >
        <Card>
          <Card.Header as="h5">{element.sender}</Card.Header>
          <Card.Body>

            <Card.Text>
              {element.content}
            </Card.Text>
            <Chat />
            <Button className="rounded-pill" size="sm" variant="danger" 
              onClick={() => {data.splice(index, 1) ;setMessages([...data])}}>elimina chat</Button>
        </Card.Body>
      </Card>
      </Col >
    )
  });

  return messages;
}


function MessagesCard() {

  const [messages, setMessages] = useState([
    {
      sender: "matteo",
      reciver: "alberto",
      content: "come si seminano i pomodori? ",
    },
    {
      sender: "matteo",
      reciver: "alberto",
      content: "come si seminano i pomodori?",
    },
    {
      sender: "matteo",
      reciver: "alberto",
      content: "come si seminano i pomodori?",
    }
  ])

  console.log(messages)

  return (<Row>
    {MessagesCards(messages, setMessages)}
  </Row>)

}

export default MessagesCard