const project = (title, description) => {
  let tasks = [];
  const addTodo = (todo) => {
    tasks.push(todo);
  };
  const removeTodo = (todo) => {
    tasks.forEach((item) => {
        if (item.title == todo.title) {
            tasks.splice(tasks.indexOf(item), 1);
        }
    })
  };
  return { title, description, tasks, addTodo, removeTodo };
};

export { project };
