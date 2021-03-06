import React from "react";
import "./styles.scss";

function Modal({ hideModal, toggleModal, children }) {
  if (hideModal) return null;
  return (
    <>
      <div
        className="modalOverlay"
        onClick={() => {
          toggleModal();
        }}
      />
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
