import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const initState = {
  todos: [
    { id: 1, content: "wake up at 8 am" },
    { id: 2, content: "make the bed" },
  ],
};

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.todo] };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initState);

  const addTodoItem = (todo) => {
    return dispatch({ type: ADD_TODO, todo });
  };

  const deleteTodo = (id) => {
    return dispatch({ type: DELETE_TODO, id });
  };

  return (
    <div className="container text-center">
      <h2 className="display-4">Todo List</h2>
      <br />
      <AddTodo addTodoItem={addTodoItem} todoCount={state.todos.length} />
      <br />
      <TodoList deleteTodo={deleteTodo} todos={state.todos} />
    </div>
  );
};

export default App;
