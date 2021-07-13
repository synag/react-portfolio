import '../styles/Header.css'

function Header() {
return (
  <nav>
    <nav className="navbar navbar-light bg-header">
      <div className="navbar-brand">Carl Benbow Portfolio</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <div href="#">
              Deployed Projects <span className="sr-only">(current)</span>
            </div>
            <a
              className="nav-link"
              href="https://synag.github.io/project_1_recipe_mixer"
            >
              Recipe Mixer <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-link"
              href="https://synag.github.io/weather-dashboard"
            >
              Weather Dashboard <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="https://synag.github.io/day_planner/">
              Day Planner <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <div href="#">Resume</div>
            <a
              className="nav-link"
              href="assets/image/carl_k_benbow_resume_032321.pdf"
              download
            >
              Resume Download <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <div href="#">Contact Information</div>
            <a className="nav-link" href="mailto:cbenbow82@gmail.com">
              Email <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="https://github.com/synag">
              Github <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/carl-benbow341"
            >
              Linkedin <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </nav>
);
}

export default Header;