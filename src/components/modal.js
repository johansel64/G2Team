import ReactModal from 'react-modal';
import React from 'react';

ReactModal.setAppElement('#root');

function Modal(props) {
  const { isOpen, onClose, contenido } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Mi Modal"
    >
      <h2>Mi Modal</h2>
      <div>
        {contenido}
      </div>
      <button className="react-modal-close" onClick={onClose}>X</button>
      
    </ReactModal>
  );
}

export default Modal;
