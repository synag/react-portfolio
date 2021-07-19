import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Router>
      <Header />
           <Route exact path="/">
           <AboutMe/>
          </Route>
          <Route exact path="/react-portfolio">
           <AboutMe/>
          </Route>
          <Route exact path="/contact">
           <Contact/>
          </Route>
          <Route exact path="/project">
         <Project/>
          </Route>
          <Route exact path="/resume">
         <Resume/>
          </Route>
          
      
        <Footer />
      </Router>

    </div>
  );
}

export default App;
