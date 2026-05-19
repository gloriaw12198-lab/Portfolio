// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        Creative<span>Studio</span>
      </h1>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

    