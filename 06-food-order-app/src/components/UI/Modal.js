import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCartModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const placeToPortal = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hideCartModal={props.hideCartModal}/>, placeToPortal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        placeToPortal
      )}
    </Fragment>
  );
};

export default Modal;
