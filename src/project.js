const project = (title) => {
  let todos = [];
  const getTitle = () => title;
  const getTodos = () => todos;
  const addTodo = (todo) => {
    todos.push(todo);
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
