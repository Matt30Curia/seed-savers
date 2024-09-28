import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineForest } from "react-icons/md";
import { TbPlant } from "react-icons/tb";
import { PiPlant } from "react-icons/pi"
import { GiTomato } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import "../styles/functionality.css"

function Functionality() {
  return (
    <>
      <Col  className="mt-4 m-3 benefit">
        <Row  className="px-4">
          <h2 className="m-title" style={{paddingLeft:"-10px"}}>Le nostre funzioni</h2>
        </Row>

        <Row className="mb-4 row-padding">
          <Col sm={6}>
            <h2><TbPlant className="square" color="#bc4749" /></h2>
            <h2  className="m-title zero-pad">Gratis</h2>
            <p className="p-large">Seed Swap è completamente gratuito, il sito è senza scopo di lucro e non accetta donazioni.</p>

          </Col>
          <Col sm={6}>
            <h2><MdOutlineForest className="square" color="#bc4749" /></h2>
            <h2  className="m-title zero-pad">Crediti</h2>
            <p className="p-large">Il nostro sito ha un sistema di crediti che permette di scambiare semi tra appassionati senza ammettere "scrocconi".</p>
          </Col>
        </Row>

        <Row className="row-padding">
          <Col sm={6}>
            <h2><GiStrawberry className="square" color="#bc4749" /></h2>
            <h2 className="m-title zero-pad">Chat</h2>
            <p className="p-large">Seed Swap permette di scambiare messaggi tra utenti per coordinare meglio le consegne e lo scambio di consigli.</p>
          </Col>
          <Col sm={6}>
            <h2><GiTomato className="square" color="#bc4749" /></h2>
            <h2 className="m-title zero-pad">Varietà</h2>
            <p className="p-large">Le varietà dipendono dal numero di utenti, quindi invitate più amici possibile per aumentare la quantità di varietà disponibili.</p>
          </Col>
        </Row>
      </Col>
    </>
  )
}


export default Functionality;