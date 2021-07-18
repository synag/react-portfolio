import "../styles/Project.css";

function Project() {

  return (
    <div>
      <div className="row">
        <div className="col cd-left cd-one" id="cardBdOne">
        <h2 className ="cd-one-text-title-1" type="button">Deployed Application</h2>
          <a className ="cd-one-text" href="https://synag.github.io/project_1_recipe_mixer/index.html" type="button">Recipe Mixer</a>
          <h2 className ="cd-one-text-title-2"  type="button">Github</h2>
          <a id="gitOne" href="https://github.com/synag/project_1_recipe_mixer" type="button" className="fab fa-github cd-one-i"></a>
        </div>
        <div className="col  cd-right cd-two" id="cardBdTwo"></div>
      </div>
      <div className="row">
        <div className="col  cd-left cd-three" id="cardBdThree"></div>
        <div className="col  cd-right cd-four" id="cardBdFour"></div>
      </div>
      <div className="row">
        <div className="col  cd-left cd-five" id="cardBdFive"></div>
        <div className="col  cd-right cd-six" id="cardBdSix"></div>
      </div>
    </div>
  );
}

export default Project;
