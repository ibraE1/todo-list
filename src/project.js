import { todo } from "./todo";

const project = (title) => {
  let todos = [];
  const getTitle = () => title;
  const getTodos = () => todos;
  const addTodo = (title, description, dueDate, priority) => {
    todos.push(todo(title, description, dueDate, priority));
  };
  const removeTodo = (todo) => {
    todos.forEach((item) => {
      if (item.title == todo.title) {
        todos.splice(todos.indexOf(item), 1);
      }
    });
  };
  return { getTitle, getTodos, addTodo, removeTodo };
};

export { project };
