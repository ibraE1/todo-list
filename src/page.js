import { projectList } from "./list";

const displaysProjects = () => {
  const display = document.createElement("div");
  const projectsDiv = document.createElement("div");
  const tasksDiv = document.createElement("div");
  display.id = "content"
  projectsDiv.id = "sidebar";
  tasksDiv.id = "task-view";

  projectList.getProjects().forEach((item) => {
    let title = document.createElement("h2");
    title.className = "project";
    title.textContent = `${item.getTitle()} ${item.getTasks().length}`;
    title.addEventListener("click", () => {
      title.classList.add("active");
      item.getTasks().forEach(task => {
        let title = document.createElement("h3");
        title.className = "todo";
        title.textContent = `⭕ ${task}`;
        
        tasksDiv.appendChild(title);
    });
    })

    projectsDiv.appendChild(title);
  });

  display.appendChild(projectsDiv);
  display.appendChild(tasksDiv);

  return display;
};

const loadPage = () => {
  const body = document.querySelector("main");

  body.appendChild(displaysProjects());
};

export { loadPage };
