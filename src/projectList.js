import { project } from "./project";

const projectList = (() => {
  let projects = [];
  const getProjects = () => projects;
  const addProject = (title) => {
    projects.push(project(title));
  };
  const removeProject = (project) => {
    projects.forEach((currentProject) => {
      if (project.getTitle() == currentProject.getTitle()) {
        projects.splice(projects.indexOf(project), 1);
      }
    });
  };

  return { getProjects, addProject, removeProject };
})();

projectList.addProject("Inbox");
projectList.getProjects()[0].addTodo("These");
projectList.getProjects()[0].addTodo("Are");
projectList.getProjects()[0].addTodo("Placeholder");
projectList.getProjects()[0].addTodo("Tasks");

export { projectList };
