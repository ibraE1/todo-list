import { projectList } from "./projectList";

const domController = (() => {
  const main = document.querySelector("main");

  const displayProjectList = () => {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    projectList.getProjects().forEach((project) => {
      sidebar.appendChild(displayProject(project));
    });

    main.appendChild(sidebar);
  };

  const displayProject = (project) => {
    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = project.getTitle();

    const pendingTodos = document.createElement("h2");
    pendingTodos.className = "pending-todos";
    pendingTodos.textContent = project.getTodos().length;

    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.addEventListener("click", () => toggleTodos(projectDiv, project));

    projectDiv.appendChild(title);
    projectDiv.appendChild(pendingTodos);

    return projectDiv;
  };

  const displayTodos = (project) => {
    const todosDiv = document.createElement("div");
    todosDiv.className = "todos";

    project.getTodos().forEach((todo) => {
      todosDiv.appendChild(displayTodo(todo));
    });

    main.appendChild(todosDiv);
  };

  const displayTodo = (todo) => {
    const todoElement = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "title";
    title.textContent = todo.getTitle();

    todoElement.appendChild(title);
    todoElement.appendChild(displayTodoDetails(todo));

    return todoElement;
  };

  const displayTodoDetails = (todo) => {
    const detailsDiv = document.createElement("div");
    const description = document.createElement("p");
    description.textContent = todo.getDescription();
    const dueDate = document.createElement("p");
    dueDate.textContent = todo.getDueDate();
    const priority = document.createElement("p");
    priority.textContent = todo.getPriority();

    detailsDiv.appendChild(description);
    detailsDiv.appendChild(dueDate);
    detailsDiv.appendChild(priority);

    return detailsDiv;
  };

  const toggleTodos = (projectDiv, project) => {
    clearScreen();
    if (projectDiv.className != "project") {
      projectDiv.className = "project";
    } else {
      projectDiv.className = "project active";
      displayTodos(project);
    }
  };

  const clearScreen = () => {
    if (main.children.length > 1) {
      main.removeChild(main.lastChild);
    }
  };

  return { displayProjectList };
})();

export { domController };
