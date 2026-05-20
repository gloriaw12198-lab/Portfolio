import { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import projectsData from "./data/projects";

function App() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Add new project
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // Filter projects based on search
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <Navbar />

      
      <HeroSection />

      {/* SEARCH BAR */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* ADD PROJECT FORM */}
      <ProjectForm addProject={addProject} />

      {/* PROJECT LIST */}
      <ProjectList projects={filteredProjects} />

      <Contact />

      
      <Footer />
    </div>
  );
}

export default App;
