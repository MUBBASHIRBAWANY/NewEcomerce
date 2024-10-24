import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './Modal.css'


const Modal1 = (props) => {
        const {items}  =  props
  return (
    <div>
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {items.brand} {items.model}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row1'>
        <div> <img className='ModalImg' src={items.image} alt="" /> </div>
        <div>
               <div className='itemModal'>Color : {items.color}</div>
        <div className='itemModal'>Color : {items.category}</div>
        <div className='itemModal'>Color : {items.model}</div>
        </div>
        </div>
        <p>
          {items.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button id='ModalButon' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>      
    </div>
  )
}

export default Modal1
