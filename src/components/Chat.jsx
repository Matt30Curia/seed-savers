import { useState } from 'react';
import { SmallButton } from "../components/Button";
import { FaPlus } from "react-icons/fa";
import { Button, Row, Col } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

function Chat() {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="rounded-pill" style={{ marginRight: 30 }} size="sm" variant="success" onClick={handleShow}>rispondi</Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={{ offset: 6 }}>
              <p class="small p-2 mx-6 mb-1 text-white rounded-3 bg-primary d-inline-block text-end w-70">Okay then see you on sunday!!</p>

              <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:15</p>
            </Col>
          </Row>
          <div>
            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary d-inline-block"  >Okay then see you on sunday!!</p>
            <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-start">00:15</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col xs={10}>
              <Form.Control
                type="text"
                placeholder="inizia la chat"
                autoFocus
              />
            </Col>
            <Col xs={1}>
              <Button variant="primary" onClick={handleClose}>
                <FaArrowAltCircleRight />
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chat;

import React from "react"
