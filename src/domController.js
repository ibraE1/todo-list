import { projectList } from "./projectList";

const domController = (() => {
  const main = document.querySelector("main");

  const createSidebar = () => {
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Todo List";

    const projects = document.createElement("div");
    projects.id = "projects";
    projectList.getProjects().forEach((project) => {
      projects.appendChild(createProject(project));
    });

    const newProjectButton = createNewProjectButton();

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    sidebar.appendChild(title);
    sidebar.appendChild(projects);
    sidebar.appendChild(newProjectButton);

    return sidebar;
  };

  const createProject = (project) => {
    const title = document.createElement("h1");
    title.className = "project-title";
    title.textContent = project.getTitle();

    const todoCount = document.createElement("h1");
    todoCount.className = "todo-count";
    todoCount.textContent = project.getTodos().length;

    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.addEventListener("click", () => {
      if (projectDiv.className == "project") {
        projectDiv.classList.add("active");
        displayContent(project);
      } else {
        projectDiv.className = "project";
        clearScreen();
        displaySidebar();
      }
    });

    projectDiv.appendChild(title);
    projectDiv.appendChild(todoCount);

    return projectDiv;
  };

  const createNewProjectButton = () => {
    const newProjectButton = document.createElement("button");
    newProjectButton.id = "new-project";
    newProjectButton.textContent = "+ Add Project";
    newProjectButton.addEventListener("click", () => {
      projectList.addProject(prompt("Enter Project Name"));
      clearScreen();
      displaySidebar();
    });

    return newProjectButton;
  };

  const createContent = (project) => {
    const heading = document.createElement("h2");
    heading.id = "content-heading";
    heading.textContent = project.getTitle();

    const todos = document.createElement("div");
    todos.id = "todos";
    project.getTodos().forEach((todo) => {
      todos.appendChild(createTodo(todo));
    });

    const newTodoButton = createNewTodoButton(project);

    const content = document.createElement("div");
    content.id = "content";

    content.appendChild(heading);
    content.appendChild(todos);
    content.appendChild(newTodoButton);

    return content;
  };

  const createTodo = (todo) => {
    const checkbox = document.createElement("input");
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";

    const label = document.createElement("label");
    label.className = "todo-title";
    label.htmlFor = "checkbox";
    label.textContent = todo.getTitle();

    const expandButton = document.createElement("button");
    expandButton.className = "expand-button";
    const span = document.createElement("span");
    span.className = "material-icons-outlined";
    span.textContent = expand_more;
    expandButton.appendChild(span);

    const todoDiv = document.createElement("div");
    todoDiv.className = `todo ${todo.getPriority()}`;

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(label);
    todoDiv.appendChild(expandButton);

    return todoDiv;
  } 

  const createNewTodoButton = (project) => {
    const newTodoButton = document.createElement("button");
    newTodoButton.id = "new-todo";
    newTodoButton.textContent = "+ Add Todo";
    newTodoButton.addEventListener("click", () => {
      project.addTodo(
        prompt("Title"),
        prompt("Description"),
        prompt("Due Date"),
        prompt("Priority")
      );
      clearScreen();
      displaySidebar();
    });

    return newTodoButton;
  };

  const clearScreen = () => {
    while (main.firstChild) main.removeChild(main.firstChild);
  };

  const displaySidebar = () => {
    main.appendChild(createSidebar());
  };

  const displayContent = (project) => {
    main.appendChild(createContent(project));
  };

  return { displaySidebar };
})();

export { domController };
