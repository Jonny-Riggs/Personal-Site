import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <section class="hero">
          <figure class="image">
            <img alt="" src="" />
          </figure>
        </section>
        <div class="tile is-ancestor box">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-grey">
                  <p class="title">Mission Statement</p>
                  <p class="subtitle">Top tile</p>
                </article>
                <article class="tile is-child notification is-grey">
                  <p class="title">Goals</p>
                  <p class="subtitle">Bottom tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-grey">
                  <p class="title">Nashville</p>
                  <p class="subtitle">Tennessee</p>
                  <figure class="image is-4by3">
                    <img
                      alt=""
                      src="https://render.fineartamerica.com/images/rendered/default/print/16.000/10.625/break/images-medium-5/nashville-skyline-dan-holland.jpg"
                    />
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-grey">
                <p class="title">Brief Overview of Education</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-grey">
              <div class="content">
                <p class="title">The Unicorn</p>
                <p class="subtitle">With even more content</p>
                <div class="content">{/* <!-- Content --> */}</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
