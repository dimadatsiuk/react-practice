import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const onOkayClick = () => {
    props.setError(null);
  };

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={onOkayClick} />;
  };
  const Modal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onOkayClick}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop  />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal  title={props.title} message={props.message}/>,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
