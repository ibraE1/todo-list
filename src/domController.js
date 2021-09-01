import { projectList } from "./projectList";

const domController = (() => {
  const main = document.querySelector("main");

  const createProjectList = () => {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    projectList.getProjects().forEach((project) => {
      sidebar.appendChild(createProject(project));
    });

    const newProjectButton = document.createElement("button");
    newProjectButton.id = "new-project";
    newProjectButton.textContent = "Add Project";
    newProjectButton.addEventListener("click", () => {
      clearScreen();
      projectList.addProject(prompt("Enter project name"));
      displaySidebar();
    });
    sidebar.appendChild(newProjectButton);

    return sidebar;
  };

  const createProject = (project) => {
    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = project.getTitle();

    const pendingTodos = document.createElement("h2");
    pendingTodos.className = "pending-todos";
    pendingTodos.textContent = project.getTodos().length;

    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.addEventListener("click", () =>
      toggleTodos(projectDiv, project)
    );

    projectDiv.appendChild(title);
    projectDiv.appendChild(pendingTodos);

    return projectDiv;
  };

  const createTodos = (project) => {
    const todosDiv = document.createElement("div");
    todosDiv.id = "todos";

    project.getTodos().forEach((todo) => {
      todosDiv.appendChild(createTodo(todo));
    });

    const newTodoButton = document.createElement("button");
    newTodoButton.id = "new-todo";
    newTodoButton.textContent = "Add Todo";
    newTodoButton.addEventListener("click", () => {
      clearScreen();
      project.addTodo(
        prompt("Enter todo name"),
        prompt("Enter description"),
        prompt("Enter due date"),
        prompt("Enter priority")
      );
      displaySidebar();
      displayTodos(project);
    });
    todosDiv.appendChild(newTodoButton);

    return todosDiv;
  };

  const createTodo = (todo) => {
    const todoElement = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "title";
    title.textContent = todo.getTitle();

    todoElement.appendChild(title);
    todoElement.appendChild(createTodoDetails(todo));

    return todoElement;
  };

  const createTodoDetails = (todo) => {
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

  const displaySidebar = () => {
    main.appendChild(createProjectList());
  };

  const displayTodos = (project) => {
    main.appendChild(createTodos(project));
  };

  const toggleTodos = (projectDiv, project) => {
    clearScreen("todos");
    if (projectDiv.className == "project") {
      Array.from(projectDiv.parentNode.children).forEach((child) =>
        child.classList.remove("active")
      );
      projectDiv.classList.add("active");
      displayTodos(project);
    } else {
      projectDiv.className = "project";
    }
  };

  const clearScreen = (parameter) => {
    if (parameter == "todos") {
      if (main.children.length > 1) {
        main.removeChild(main.lastChild);
      }
    } else {
      while (main.firstChild) main.removeChild(main.firstChild);
    }
  };

  return { displaySidebar };
})();

export { domController };
