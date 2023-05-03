import React, { useEffect, useState } from 'react';
import './modal.css';

const Modal = ({ modalDetails }) => {
  const [isActive, setIsActive] = useState(false);

  // - Display modal if modalDetails available.
  useEffect(() => {
    if (!modalDetails) {
      return;
    } else {
      setIsActive(true);
    }
  }, [modalDetails]);

  const closeModal = () => {
    return isActive ? setIsActive(false) : null;
  };

  return isActive ? (
    <div className={`modalContainer ${isActive ? 'active' : ''}`}>
      <div>
        <div className="modalBox">
          <p>{modalDetails.message}</p>
          <div className="buttonContainer">
            <span onClick={closeModal}>OK</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
