import React, { Component } from 'react';
import logo from './assets/logogeek.png';

import './App.css';
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

        <header id="init"className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p className="display-4">
              Frontend Developer
            </p>
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
