import React from "react";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
    })
  ) : (
    <p>There is no todo's left</p>
  );

  return (
    <div className="todo-list">
      <ListGroup variant="flush">{todoList}</ListGroup>
    </div>
  );
};
export default TodoList;
