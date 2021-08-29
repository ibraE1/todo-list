import { project } from "./project";

const projectList = (() => {
  let projects = [];
  const getProjects = () => projects;
  const addProject = (name) => {
    projects.push(project(name));
  };
  const removeProject = (proj) => {
    projects.forEach((item) => {
      if (item.name == proj.name) {
        projects.splice(projects.indexOf(item), 1);
      }
    });
  };

  return { getProjects, addProject, removeProject };
})();

projectList.addProject("📥 Inbox");
projectList.getProjects()[0].addTodo("These");
projectList.getProjects()[0].addTodo("Are");
projectList.getProjects()[0].addTodo("Placeholder");
projectList.getProjects()[0].addTodo("Tasks");

export { projectList };
