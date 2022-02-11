import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const AddTodo = ({ addTodoItem, todoCount }) => {
  const [id, setId] = useState(todoCount + 1);
  const [todoContent, setTodoContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { id, content: todoContent };
    addTodoItem(todo);
    //her todo eklendiğinde idyi 1 arttır
    setId(id + 1);
    //her todo eklendikten sonra formu boşalt
    setTodoContent("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Content :</label>
        <InputGroup size="sm" className="mb-3 justify-content-center">
          <FormControl
            value={todoContent}
            required
            onChange={(e) => {
              setTodoContent(e.currentTarget.value);
            }}
            className="col-6"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </form>
    </div>
  );
};
export default AddTodo;
