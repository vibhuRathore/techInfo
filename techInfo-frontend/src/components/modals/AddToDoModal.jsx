import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function AddToDoModal(props) {
  console.log("props?.value", props?.value);
  const [title, setTitle] = useState(
    props?.value?.title ? props?.value?.title : ""
  );
  const [description, setDescription] = useState(
    props?.value?.description ? props?.value?.description : ""
  );
  useEffect(() => {
    if (props?.value?.title) {
      setTitle(props?.value?.title);
    }
    if (props?.value?.description) {
      setDescription(props?.value?.description);
    }
  }, [props?.value?.title, props?.value?.description]);

  const handleSubmit = () => {
    const todo = {
      title: title,
      description: description,
      isCompleted: false,
    };

    props?.addToDo(todo);
    props?.closeToDoModal();
  };

  const handleUpdate = () => {
    const todo = {
      title: title,
      description: description,
      isCompleted: false,
      createdAt: Date.now(),
    };
    let updatedValue = { ...props?.value, ...todo };

    props?.updateToDo(updatedValue);
    props?.closeToDoModal();
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Modal show={props?.modalState} onHide={props?.closeToDoModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add ToDo Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <input
              className=""
              type="text"
              placeholder="Enter Title for your ToDo Item"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="mt-3"
              type="text"
              placeholder="Enter Description for your ToDo Item"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.closeToDoModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={props?.value?.id ? handleUpdate : handleSubmit}
          >
            {props?.value?.id ? "Update ToDo" : "Add ToDo"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
