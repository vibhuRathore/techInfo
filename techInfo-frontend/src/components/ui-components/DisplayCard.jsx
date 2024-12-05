import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AddToDoModal from "../modals/AddToDoModal";
import { useState } from "react";

function DisplayCard(props) {
  const [modalState, setModalState] = useState(false);
  const openToDoModal = () => {
    setModalState(true);
  };
  const closeToDoModal = () => {
    setModalState(false);
  };

  const markAsDone = () => {
    let updatedToDo = { ...props?.data, isCompleted: true };
    props.updateToDo(updatedToDo);
  };

  return (
    <>
      <Card style={{ width: "36rem" }}>
        <Card.Body>
          <Card.Title>{props?.data?.task}</Card.Title>
          <Card.Subtitle>{props?.data?.description}</Card.Subtitle>
          <Button
            variant="primary"
            onClick={openToDoModal}
            disabled={props?.data?.isCompleted}
            className="btn m-1"
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => props?.deleteToDo(props?.data?.id)}
            className="m-1"
          >
            Delete
          </Button>
          <Button
            className="m-1"
            variant="success"
            onClick={markAsDone}
            disabled={props?.data?.isCompleted}
          >
            Mark as Done
          </Button>
        </Card.Body>
      </Card>
      <AddToDoModal
        value={props?.data}
        modalState={modalState}
        openToDoModal={openToDoModal}
        closeToDoModal={closeToDoModal}
        updateToDo={props?.updateToDo}
      />
    </>
  );
}

export default DisplayCard;
