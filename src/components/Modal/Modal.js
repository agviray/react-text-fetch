import React, { useEffect, useState } from 'react';
import './modal.css';
import WarningIcon from '../icons/WarningIcon';

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
          <div>
            <div className="icon">
              <span>
                <WarningIcon
                  style={{
                    triangleColor: '#0b605e',
                    exclamationColor: 'white',
                  }}
                />
              </span>
            </div>
          </div>
          <div>
            <div className="heading">
              <h3>{modalDetails.heading}</h3>
            </div>
            <p>{modalDetails.message}</p>
            <div className="buttonContainer" onClick={closeModal}>
              OK
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
