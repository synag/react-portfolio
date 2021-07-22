import "../styles/Navigation.css";
import Main from "./AboutMe";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Navigation() {
 

  return (
    <nav>
      <div className="row">
        <div className="col">
          <Link to={`/`}>About Me</Link>
        </div>
        <div className="col">
          <Link to={`/project`}>Project</Link>
        </div>
        <div className="col">
          {/* <Router basename="/react-portfolio"> */}
          <Link to={`/contact`}>Contact</Link>
          {/* </Router> */}
        </div>
        <div className="col">
          <Link to={`/resume`}>Resume</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
