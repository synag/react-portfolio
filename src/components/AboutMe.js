import React from "react";
import "../styles/Main.css";
import developerPhoto from "../images/Carl'sPhoto.png";

    
function AboutMe() {
  return (
    <main>
      <h2>About Me</h2>
      <img
        className="coverPhoto"
        src={developerPhoto}
        width="50"
        height="50"
        alt="Picture of Carl Benbow"
      ></img>
      <p>
        Carl Benbow is an experienced software developer and has a proven track
        record of application development. Carl has experience with CSS, HTML,
        JavaScript, React, Note JS, and Mongo DB. Carl also has a master’s
        degree in Business Administration (MBA) from Norwich University and
        bachelor’s degree in Healthcare Administration from Stonehill College.
        He is also a Scaled Agile Program Consultant, Agile Certified
        Practitioner, Project Management Professional, Earned Value Management
        Professional, and holds a Lean Six Sigma Master Black Belt
        certification.
      </p>

    
    </main>
  );
}

export default AboutMe;
