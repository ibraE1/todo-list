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
    const icon = document.createElement("span");
    icon.className = "material-icons-outlined";
    icon.textContent = project.getTitle() == "Inbox" ? "inbox" : "list_alt";

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
        Array.from(projectDiv.parentNode.children).forEach((child) => {
          child.classList.remove("active");
        });
        clearScreen("content");
        displayContent(project);
        projectDiv.classList.add("active");
      } else {
        projectDiv.className = "project";
        clearScreen("content");
      }
    });

    projectDiv.appendChild(icon);
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
      displaySidebar(projectList.getProjects().length - 1);
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
      todos.appendChild(createTodo(project, todo));
    });

    const newTodoButton = createNewTodoButton(project);

    const content = document.createElement("div");
    content.id = "content";

    content.appendChild(heading);
    content.appendChild(todos);
    content.appendChild(newTodoButton);

    return content;
  };

  const createTodo = (project, todo) => {
    const checkbox = document.createElement("input");
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.addEventListener("click", () => {
      todo.toggleStatus();
    });

    const label = document.createElement("label");
    label.className = "todo-title";
    label.htmlFor = "checkbox";
    label.textContent = todo.getTitle();

    const expandButton = createExpandButton();

    const heading = document.createElement("div");
    heading.className = "todo-heading";

    heading.appendChild(checkbox);
    heading.appendChild(label);
    heading.appendChild(expandButton);

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.getDescription();

    const dueDate = document.createElement("p");
    dueDate.className = "due-date";
    dueDate.textContent = todo.getDueDate();

    const deleteButton = createDeleteTodo(project, todo);

    const details = document.createElement("div");
    details.className = "todo-details";

    details.appendChild(description);
    details.appendChild(dueDate);
    details.appendChild(deleteButton);

    const todoDiv = document.createElement("div");
    todoDiv.className = `todo ${todo.getPriority()}`;

    todoDiv.appendChild(heading);
    todoDiv.appendChild(details);

    return todoDiv;
  };

  const createExpandButton = () => {
    const expandButton = document.createElement("button");
    expandButton.className = "expand-button";
    const span = document.createElement("span");
    span.className = "material-icons-outlined";
    span.textContent = "expand_more";

    expandButton.appendChild(span);

    expandButton.addEventListener("click", () => {
      const details = expandButton.parentElement.parentElement.lastChild;
      if (details.style.display == "none") {
        details.style.display = "flex";
        span.textContent = "expand_less";
      } else {
        details.style.display = "none";
        span.textContent = "expand_more";
      }
    });

    return expandButton;
  };

  const createDeleteTodo = (project, todo) => {
    const deleteButton = document.createElement("button");
    deleteButton.className = "material-icons-outlined delete-todo";
    deleteButton.textContent = "delete_outline";

    deleteButton.addEventListener("click", () => {
      project.removeTodo(todo);
      clearScreen();
      displaySidebar(projectList.getProjects().indexOf(project));
    });

    return deleteButton;
  };

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
      clickOnProject(project);
    });

    return newTodoButton;
  };

  const clickOnProject = (project) => {
    const index = projectList.getProjects().indexOf(project);
    document.querySelector("#projects").children[index].click();
  };

  const clearScreen = (parameter) => {
    if (parameter) {
      while (main.childElementCount > 1) main.removeChild(main.lastChild);
    } else {
      while (main.firstChild) main.removeChild(main.firstChild);
    }
  };

  const displaySidebar = (index) => {
    main.appendChild(createSidebar());
    if (index !== undefined) clickOnProject(projectList.getProjects()[index]);
  };

  const displayContent = (project) => {
    main.appendChild(createContent(project));
  };

  return { displaySidebar };
})();

export { domController };
