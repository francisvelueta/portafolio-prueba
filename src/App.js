import React, { Component } from 'react';
import logo from './assets/logogeek.png';

import './App.css';
import Fade from 'react-reveal/Fade';

import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header text-center">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
          <Fade left>
            <p className=" display-4 text-danger font-weight-bold text-shaw" >
              Frontend Developer
            </p>
            </Fade>
          <p>
            Javascript | HTML5/CSS3 | ReactJS | Firebase | NodeJS | Bootstrap | Metodología Ágil
          </p>

        </header>
    <Aboutme/>
    <Projects />
    <Curriculum/>
    <Contact/>
  </div>

    );
  }
}

export default App;
