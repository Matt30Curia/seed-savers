import { Row, Col } from "react-bootstrap"
import { AmountCard } from "./Card";

function VarietiesCards(varieties) {

  let rows = []

  varieties.forEach(item => {
    rows.push(
      <Col md={4}>
        <AmountCard
          title={`${item.vegetables} ${item.variety}`}
          amount={item.amount}
          img="https://images.unsplash.com/photo-1632770464496-bc3ab017059d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Col>
    )

  });

  return rows

}

function Varieties({ data }) {

  const varieties = [
    {
      id: "55689",
      title: "Pomodro nero",
      img: "https://images.unsplash.com/photo-1632770464496-bc3ab017059d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount: "10"
    },
    {
      id: "55689",
      title: "Pomodro nero",
      img: "https://images.unsplash.com/photo-1632770464496-bc3ab017059d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount: "10"
    },
    {
      id: "55689",
      title: "Pomodro nero",
      img: "https://images.unsplash.com/photo-1632770464496-bc3ab017059d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount: "10"
    },

  ]

  return (
    
      <Row>
        {VarietiesCards(data)}
      </Row>
    
  )
}

export default Varieties