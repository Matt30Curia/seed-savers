import { useState } from 'react';
import { SmallButton } from "../components/Button";
import { FaPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddVariety({ setVarieties }) {

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(
    [{
      vegetables: "",
      variety: "",
      description: "",
      amount: "",
    }],
  );


  const handleChange = (event) => {

    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const addVariety = (obj) => {
    
    if (obj.vegetables && obj.variety  && obj.amount  && obj.description ) {
      setVarieties(prev => [...prev, obj])
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SmallButton onClick={handleShow}> <FaPlus /> </SmallButton>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi varietà</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ortaggio</Form.Label>
              <Form.Control
                name='vegetables'
                onChange={handleChange}
                value={formData.vegetables}
                type="text"
                placeholder="es. Pomodoro"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Varietà</Form.Label>
              <Form.Control
                name='variety'
                onChange={handleChange}
                value={formData.variety}
                type="text"
                placeholder="es. perino giallo"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantità</Form.Label>
              <Form.Control
                name='amount'
                onChange={handleChange}
                value={formData.amount}
                type="number"
                placeholder="es. 10"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3}
                name='description'
                onChange={handleChange}
                value={formData.description} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { addVariety(formData); handleClose() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddVariety;