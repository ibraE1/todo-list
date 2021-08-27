const todo = (title, description, dueDate, priority, status) => {
  const setStatus = () => {
    status = status == "pending" ? "complete" : "pending";
  };
  const changePriority = (newPriority) => {
    priority = newPriority;
  };
  return { title, description, dueDate, priority, status, setStatus, changePriority };
};

export { todo };
