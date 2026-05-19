
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <h2 className="no-projects">
        No projects found.
      </h2>
    );
  }

  return (
    <section
      id="projects"
      className="projects-grid"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}

export default ProjectList;