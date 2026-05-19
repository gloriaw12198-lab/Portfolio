// src/components/ProjectForm.jsx

import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] = useState("");

  const [category, setCategory] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
      image,
      category,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
    setImage("");
    setCategory("");
  };

  return (
    <section className="form-section">
      <h2>Add New Project</h2>

      <form
        className="project-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          required
        />

        <button type="submit">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;