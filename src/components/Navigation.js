import "../styles/Navigation.css";
import Main from './AboutMe';
import React from 'react';



function Navigation() {
  return (
    <nav>
      <div className="row">
        <div className="col">
          <a type="button"
        href="/react-portfolio" >About Me</a>
        </div>
        <div className="col">
          <a type="button" href ="/project" >Projects</a>
        </div>
        <div className="col">
          <a type="button" href ="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
