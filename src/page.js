import { projectList } from "./projectList";

const displayProjects = () => {
  const content = document.createElement("div");
  const projectsDiv = document.createElement("div");
  const tasksDiv = document.createElement("div");
  content.id = "content";
  projectsDiv.id = "sidebar";
  tasksDiv.id = "taskview";

  projectList.getProjects().forEach((project) => {
    let title = document.createElement("h2");
    title.className = "project";
    title.textContent = `${project.getTitle()} ${project.getTodos().length}`;
    title.addEventListener("click", () => {
      title.classList.add("active");
      project.getTodos().forEach((todo) => {
        let title = document.createElement("h3");
        title.className = "todo";
        title.textContent = `${todo}`;

        tasksDiv.appendChild(title);
      });
    });

    projectsDiv.appendChild(title);
  });

  content.appendChild(projectsDiv);
  content.appendChild(tasksDiv);

  return content;
};

const loadPage = () => {
  const body = document.querySelector("main");

  body.appendChild(displayProjects());
};

export { loadPage };
