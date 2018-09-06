import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Route path="/Home" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
