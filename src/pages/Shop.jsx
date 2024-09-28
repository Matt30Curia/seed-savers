import NavBar from "../components/NavBar";
import {CustomCard} from "../components/Card";
import Footer from "../components/Footer";

import { Container, Col, Row } from "react-bootstrap";

const GridMaker = (data, elemInRow) => {
  const rows = []

  while (data.length) {
    const cardInRow = []

    for (let i = 0; i < elemInRow && data.length; i++) {
      const item = data.pop()
      cardInRow.push(
        <Col className="my-4" md={12 / elemInRow}>
          <CustomCard
            title={item.title}
            desc={item.description}
            img={item.img}
            id={item.id}
          />
        </Col>
      )
    }

    rows.push(<Row>{cardInRow}</Row>)
  }

  return rows
}


function Shop() {

  let data = [
    {
      "id": "56565",
      "title": "Pomodoro Nero",
      "description": "pomodoro dal gusto straordinario e molto vigoroso, resiste alla peronospora ed alla siccità",
      "img": "https://images.unsplash.com/photo-1632770464496-bc3ab017059d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "12345",
      "title": "Pomodoro Rosso",
      "description": "varietà classica di pomodoro, ideale per sughi e insalate",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "67890",
      "title": "Melanzana Bianca",
      "description": "melanzana dal sapore delicato, ideale per grigliate e caponate",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "11223",
      "title": "Zucchina Gialla",
      "description": "varietà di zucchina dal colore brillante, ottima per zuppe e frittate",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "33445",
      "title": "Peperone Rosso",
      "description": "peperone dolce e croccante, perfetto per insalate e grigliate",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "55667",
      "title": "Cavolfiore Viola",
      "description": "varietà di cavolfiore dal colore unico, ricco di antiossidanti e vitamine",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "77889",
      "title": "Carota Arancione",
      "description": "classica carota dal colore brillante, dolce e croccante, ideale per ogni uso culinario",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "99001",
      "title": "Ravanello Rosso",
      "description": "ravanello dal sapore piccante e fresco, perfetto per insalate e piatti decorativi",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "22334",
      "title": "Lattuga Romana",
      "description": "varietà di lattuga croccante e dolce, ideale per insalate fresche e salutari",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "44556",
      "title": "Cetriolo Verde",
      "description": "cetriolo dal sapore fresco e croccante, ideale per insalate e sottaceti",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "66778",
      "title": "Zucchina Verde",
      "description": "zucchina versatile e delicata, ottima per piatti cotti e crudi",
      "img": "https://images.unsplash.com/photo-1489450278009-822e9be04dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <>
      <NavBar />
      <Container className="mx-center">{GridMaker(data, 4)}</Container>

      <Footer />
    </>
  )
}

export default Shop;