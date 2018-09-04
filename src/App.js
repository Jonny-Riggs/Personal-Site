import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact';
import Landing from './Landing/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" component={Landing}></Route>
          <Route path="/Home" component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
