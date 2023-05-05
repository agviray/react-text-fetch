import React, { useEffect, useState } from 'react';
import './modal.css';
import WarningIcon from '../icons/WarningIcon';

const initialModalStatus = {
  isActive: false,
  isDefault: true,
};
const Modal = ({ modalDetails, selectedPair }) => {
  const [modalStatus, setModalStatus] = useState(initialModalStatus);

  // - Display modal if modalDetails available.
  useEffect(() => {
    if (!modalDetails) {
      setModalStatus(initialModalStatus);
    } else if (modalDetails) {
      if (modalDetails.type === 'default') {
        setModalStatus({ ...modalStatus, isActive: true });
      } else if (modalDetails.type === 'warning') {
        setModalStatus({ isActive: true, isDefault: false });
      }
    }
  }, [modalDetails]);

  const closeModal = () => {
    return modalStatus.isActive === true
      ? setModalStatus(initialModalStatus)
      : null;
  };

  const handleClick = (arg, callback) => {
    if (!callback) {
      closeModal();
    } else {
      closeModal();
      callback(arg);
    }
  };

  const renderButtons = (buttonDetails, pair) => {
    return (
      <>
        {buttonDetails.map(({ type, text, buttonAction }) => (
          <div
            key={type}
            className={`button ${type}`}
            onClick={() => handleClick(pair, buttonAction)}
          >
            {text}
          </div>
        ))}
      </>
    );
  };

  return modalStatus.isActive ? (
    <div className={`modalContainer ${modalStatus.isActive ? 'active' : ''}`}>
      <div>
        <div className="modalBox">
          <div>
            <div
              className={`icon ${
                modalStatus.isDefault === true ? '' : 'warning'
              }`}
            >
              <span>
                <WarningIcon
                  style={{
                    triangleColor: `${
                      modalStatus.isDefault === true ? `#0b605e` : `#f43131`
                    }`,
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
            <div
              className={`buttonContainer ${
                modalStatus.isDefault === true ? '' : 'warning'
              }`}
            >
              {modalDetails.buttons ? (
                <>{renderButtons(modalDetails.buttons, selectedPair)}</>
              ) : (
                <div className="button" onClick={closeModal}>
                  OK
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
