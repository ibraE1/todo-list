import { projectList } from "./list";

const displaysProjects = () => {
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "sidebar";

  projectList.getProjects().forEach((item) => {
    let title = document.createElement("h2");
    let tasks = document.createElement("div");
    title.textContent = item.getTitle();

    item.getTasks().forEach(task => {
        let title = document.createElement("h3");
        title.textContent = task;
        
        tasks.appendChild(title);
    });

    projectsDiv.appendChild(title);
    projectsDiv.appendChild(tasks);
  });

  return projectsDiv;
};

const loadPage = () => {
  const content = document.querySelector("#content");

  content.appendChild(displaysProjects());
};

export { loadPage };
