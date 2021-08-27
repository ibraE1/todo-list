const project = (title, description) => {
  let tasks = [];
  const getTitle = () => title;
  const getDescription = () => description;
  const getTasks = () => tasks;
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
  return { getTitle, getDescription, getTasks, addTodo, removeTodo };
};

export { project };
