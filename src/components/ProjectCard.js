import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from './modal';
import Gallery from './Gallery';


export const ProjectCard = ({ title, description, imgUrl, img1 }) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };


  return (
  <>
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 onClick={abrirModal}>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
      <Modal
        isOpen={modalAbierto}
        onClose={cerrarModal}
        contenido={<Gallery showImages={img1} />}
        
      />
    </>
  )
}
