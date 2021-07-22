
import "../styles/Resume.css";
import PDF from "../images/resume.pdf"




function Resume() {
  return (
    <main className="resumePage">
      <div className="resumeDiv">
        <h2 className="resumename">Resume</h2>

        <h4>Download</h4>

        <p>
          Download Resume
          <span>
            <a href ={PDF} target ="_blank" >
              here
            </a>

          </span>
        </p>
        <h3>Front-End  Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-End  Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequalize</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>REST</li>
        </ul>
      </div>
    </main>
  );
}
export default Resume;