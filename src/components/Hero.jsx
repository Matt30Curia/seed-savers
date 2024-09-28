
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/hero.css"

const CreateItem = (photo, index) =>
  <Carousel.Item key={index} interval={700} >

    <img src={photo} className="img-hero" alt="" />

  </Carousel.Item>


function Hero() {
  const navigate = useNavigate();


  const photo = [
    "https://images.unsplash.com/photo-1647134619933-452c43b63970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1443131612988-32b6d97cc5da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507484467459-0c01be16726e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1601077698487-0047c339d313?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516868338112-a5452955a91b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1566842600175-97dca489844f?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D3D"
  ]

  return (
    <Row className="mx-4 mt-3 gx-auto">
      <Col>
        <div className='rounded-4' id="welcome-card">
          <Col >
            <Row><h1 className='title'> Seed Swap</h1></Row>
            <Row><p> Il <strong>sito</strong> che permette di scambiare <strong>semi</strong> in maniera <strong>gratuita</strong> tra appassionati.</p></Row>
            <Row><Button onClick={()=>navigate("/shop")} id='button'>➜ inizia a scambiare semi </Button></Row>
          </Col>
        </div>
      </Col>
      <Col>
        <Carousel controls={false} indicators={false} className="carousel-fade" >
          {photo.map(CreateItem)}
        </Carousel>
      </Col>

    </Row>
  )

}

export default Hero;