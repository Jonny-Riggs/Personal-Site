import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Wave } from 'react-animated-text';

const ExampleOne = () => (
  <Wave text="Hello World" />
);

export default class Landing extends Component {

  render() {
    return (
      <section class="hero is-dark is-fullheight">
        {/* <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item" href="../">
                  <img
                    src="http://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="#">
                      <span class="icon">
                        <i class="fa fa-home" />
                      </span>
                      <span>Home</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="#">
                      <span class="icon">
                        <i class="fa fa-superpowers" />
                      </span>
                      <span>Examples</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="#">
                      <span class="icon">
                        <i class="fa fa-book" />
                      </span>
                      <span>Documentation</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a
                      class="button is-white is-outlined"
                      href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html"
                    >
                      <span class="icon">
                        <i class="fa fa-github" />
                      </span>
                      <span>View Source</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div> */}

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title"></h1>
              <h2 class="subtitle">
                    <ExampleOne />
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
