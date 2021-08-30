import { projectList } from "./projectList";

const displayTodos = (project) => {
  const body = document.querySelector("main");
  const todosDiv = document.createElement("div");
  todosDiv.id = "taskview";

  project.getTodos().forEach((todo) => {
    let title = document.createElement("h3");
    title.className = "todo";
    title.textContent = todo.getTitle();
    
    todosDiv.appendChild(title);
  })

  body.appendChild(todosDiv);
};

const displayProject = (project) => {
  let title = document.createElement("h2");
  title.className = "project";
  title.textContent = `${project.getTitle()} ${project.getTodos().length}`;
  title.addEventListener("click", () => {
    displayTodos(project);
  });

  return title;
};

const displayProjectList = () => {
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "sidebar";

  projectList.getProjects().forEach((project) => {
    projectsDiv.appendChild(displayProject(project));
  });

  return projectsDiv;
};

const loadPage = () => {
  const body = document.querySelector("main");

  body.appendChild(displayProjectList());
};

export { loadPage };
