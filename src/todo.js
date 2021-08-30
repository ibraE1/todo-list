const todo = (title, description, dueDate, priority) => {
  let status = "pending";
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;
  const changePriority = (newPriority) => {
    priority = newPriority;
  };
  const toggleStatus = () => {
    status = status == "pending" ? "complete" : "pending";
  };
  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    changePriority,
    getStatus,
    toggleStatus,
  };
};

export { todo };
