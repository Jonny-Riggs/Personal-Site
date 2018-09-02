import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Home extends Component {
  render() {
    return (
      <body>
        <section className="container">
          <div className="columns features">
            <div className="column is-4">
              {/* <div className="card"> */}
              <div className="card-image has-text-centered">
                <i className="fa fa-paw" />
              </div>
              <div className="card-content">
                <div className="content">
                  <figure className="image is-4by5">
                    <img src="./img/2018_07_24_C25_0558.jpg" alt="" />
                  </figure>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="tile is-parent is-8 is-shady">
              <article className="tile is-child notification is-grey">
                <p className="title">Hello World!</p>
                <div className="content">
                  <p>
                    My name is Jonathan Riggs and I am incredibly excited to share with you my journey through
                    software development.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="sandbox">
            {/* <div className="tile is-ancestor">
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Hello World</p>
                  <p className="subtitle">What is up?</p>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Foo</p>
                  <p className="subtitle">Bar</p>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Third column</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </div>
                </article>
              </div>
            </div> */}
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-grey">
                      <p className="title">Vertical tiles</p>
                      <p className="subtitle">Top box</p>
                    </article>
                    <article className="tile is-child notification is-grey">
                      <p className="title">Vertical tiles</p>
                      <p className="subtitle">Bottom box</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-grey">
                      <p className="title"></p>
                      <p className="subtitle"></p>
                      <figure className="image is-5by4">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzwSQTqobLXT-rapfSxfBM7aKYX9Haqsq39FIahdHYFXaELzB5g"
                          alt="Description"
                        />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent is-shady">
                  <article className="tile is-child notification is-white">
                    <p className="title">Wide column</p>
                    <p className="subtitle">Aligned with the right column</p>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-grey">
                  <div className="content">
                    <p className="title">Tall column</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam semper diam at erat pulvinar, at pulvinar felis
                        blandit. Vestibulum volutpat tellus diam, consequat
                        gravida libero rhoncus ut. Morbi maximus, leo sit amet
                        vehicula eleifend, nunc dui porta orci, quis semper odio
                        felis ut quam.
                      </p>
                      <p>
                        Suspendisse varius ligula in molestie lacinia. Maecenas
                        varius eget ligula a sagittis. Pellentesque interdum,
                        nisl nec interdum maximus, augue diam porttitor lorem,
                        et sollicitudin felis neque sit amet erat. Maecenas
                        imperdiet felis nisi, fringilla luctus felis hendrerit
                        sit amet. Aenean vitae gravida diam, finibus dignissim
                        turpis. Sed eget varius ligula, at volutpat tortor.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            {/* <div className="tile is-ancestor">
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Side column</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </div>
                </article>
              </div>
            </div> */}
            {/* <div className="tile is-ancestor">
              <div className="tile is-parent is-8 is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Murphy's law</p>
                  <p className="subtitle">
                    Anything that can go wrong will go wrong
                  </p>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </div>
                </article>
              </div>
            </div> */}
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="columns">
              <div className="column is-3 is-offset-2">
                <h2>
                  <strong>Category</strong>
                </h2>
                <ul>
                  <li>
                    <a href="">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="">Vestibulum errato isse</a>
                  </li>
                  <li>
                    <a href="">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="">Aisia caisia</a>
                  </li>
                  <li>
                    <a href="">Murphy's law</a>
                  </li>
                  <li>
                    <a href="">Flimsy Lavenrock</a>
                  </li>
                  <li>
                    <a href="">Maven Mousie Lavender</a>
                  </li>
                </ul>
              </div>
              <div className="column is-3">
                <h2>
                  <strong>Category</strong>
                </h2>
                <ul>
                  <li>
                    <a href="">Labore et dolore magna aliqua</a>
                  </li>
                  <li>
                    <a href="">Kanban airis sum eschelor</a>
                  </li>
                  <li>
                    <a href="">Modular modern free</a>
                  </li>
                  <li>
                    <a href="">The king of clubs</a>
                  </li>
                  <li>
                    <a href="">The Discovery Dissipation</a>
                  </li>
                  <li>
                    <a href="">Course Correction</a>
                  </li>
                  <li>
                    <a href="">Better Angels</a>
                  </li>
                </ul>
              </div>
              <div className="column is-4">
                <h2>
                  <strong>Category</strong>
                </h2>
                <ul>
                  <li>
                    <a href="">Objects in space</a>
                  </li>
                  <li>
                    <a href="">Playing cards with coyote</a>
                  </li>
                  <li>
                    <a href="">Goodbye Yellow Brick Road</a>
                  </li>
                  <li>
                    <a href="">The Garden of Forking Paths</a>
                  </li>
                  <li>
                    <a href="">Future Shock</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content has-text-centered">
              <p>
                <a
                  className="icon"
                  href="https://github.com/dansup/bulma-templates"
                >
                  <i className="fa fa-github" />
                </a>
              </p>
              {/* <div className="control level-item">
                            <a href="https://github.com/dansup/bulma-templates">
                            <div className="tags has-addons">
                            <span className="tag is-dark">Bulma Templates</span>
                            <span className="tag is-info">MIT license</span>
                            </div>
                            </a>
                            </div> */}
            </div>
          </div>
          <script src="../js/bulma.js" />
        </footer>
      </body>
    );
  }
}
