import React from "react";
import { ListGroup } from "react-bootstrap";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <ListGroup.Item onClick={() => deleteTodo(todo.id)}>
      {todo.content}
    </ListGroup.Item>
  );
};

export default Todo;
