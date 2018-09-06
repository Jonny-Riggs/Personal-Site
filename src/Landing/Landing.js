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
          <div class="hero-body">
            <div class="container">
              <h1 class="title"></h1>
              <h2 class="subtitle"></h2>
            </div>
          </div>
        </section>
    );
  }
}
