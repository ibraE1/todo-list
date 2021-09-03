import { project } from "./project";

const projectList = (() => {
  let projects = [project("Inbox")];
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

export { projectList };
