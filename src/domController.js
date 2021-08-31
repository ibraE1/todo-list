import { project } from "./project";
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

    projectDiv.appendChild(title);
    projectDiv.appendChild(pendingTodos);

    return projectDiv;
  };

  const displayTodos = () => {
    const todosDiv = document.createElement("div");

    projectList.getProjects().forEach((project) => {
      project.getTodos().forEach((todo) => {
        const title = document.createElement("h3");
        title.className = "title";
        title.textContent = todo.getTitle();
        todosDiv.appendChild(title);
        todosDiv.appendChild(displayTodoDetails(todo));
      });
    });

    main.appendChild(todosDiv);
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

  return { displayProjectList, displayTodos };
})();

export { domController };
