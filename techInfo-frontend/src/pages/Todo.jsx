import { Button } from "react-bootstrap";
import DisplayCard from "../components/ui-components/DisplayCard";
import { useEffect, useState } from "react";
import AddToDoModal from "../components/modals/AddToDoModal";
import axios from "axios";

const Todo = () => {
  const [allToDos, setAllToDos] = useState([]);
  const [modalState, setModalState] = useState(false);

  const getAllToDos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos/");
      if (response.status === 200) {
        console.log("response", response);
        setAllToDos(response.data.todoList);
      } else {
        console.error("Failed to fetch todos:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
      return [];
    }
  };

  useEffect(() => {
    getAllToDos();
  }, []);

  const addToDo = async (newToDo) => {
    try {
      console.log(newToDo);
      const response = await axios.post("http://localhost:3000/todos", newToDo);
      console.log(response.data);
      if (response.status === 201) {
        console.log("ToDo added successfully:", response.data);
        getAllToDos();
      } else {
        console.error("Failed to add ToDo:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding ToDo:", error);
    }
  };

  const updateToDo = async (updatedToDo) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/todos/${updatedToDo.id}`,
        updatedToDo
      );
      console.log(response);
      if (response.status === 201) {
        console.log("ToDo updated successfully:", response.data);
        getAllToDos();
      } else {
        console.error("Failed to update ToDo:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating ToDo:", error);
    }
  };

  const deleteToDo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/todos/${id}`);
      if (response.status === 200) {
        console.log("ToDo deleted successfully");
        getAllToDos();
      } else {
        console.error("Failed to delete ToDo:", response.statusText);
        getAllToDos();
      }
    } catch (error) {
      console.error("Error deleting ToDo:", error);
      getAllToDos();
    }
  };

  const openToDoModal = () => {
    setModalState(true);
  };

  const closeToDoModal = () => {
    setModalState(false);
  };

  return (
    <>
      <div className="text-center my-4">
        <h1>ToDo List</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {allToDos.map((todoItem, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-3"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <DisplayCard
                  data={todoItem}
                  updateToDo={updateToDo}
                  deleteToDo={deleteToDo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-4">
        <button
          className="btn btn-primary p-3 text-lg font-bold"
          onClick={openToDoModal}
        >
          addTask
        </button>
      </div>
      <AddToDoModal
        modalState={modalState}
        openToDoModal={openToDoModal}
        closeToDoModal={closeToDoModal}
        addToDo={addToDo}
      />
    </>
  );
};

export default Todo;
