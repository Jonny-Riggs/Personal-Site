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
              <article className="tile is-child notification is-grey has-text-centered">
                <p className="title">Hello World!</p>
                <div className="content">
                  <h2>
                    My name is Jonathan Riggs and I am incredibly excited to
                    share with you my journey through software development. I am
                    a musician turned developer and I couldn't be happier. I've
                    got a lot to share and even more to learn so I'm wasting no
                    time to hit the ground running. I'm always down to talk code
                    and look for any excuse to get coffee so lets plan
                    something!
                  </h2>
                </div>
              </article>
            </div>
          </div>
          <div className="sandbox">
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    {/* <article className="tile is-child notification is-grey">
                      <p className="title">Articles</p>
                      <p className="subtitle">Top box</p>
                    </article> */}
                    <article className="tile is-child notification is-grey">
                      <p className="title">Podcasts</p>
                      <p className="subtitle">
                        I've learned that taking breaks from code can be a very
                        powerful tool for you to get the most out of what you're
                        working on. These stations have given me an amazing
                        source for information as well as entertainment. The
                        content provides a source for new ideas and interesting
                        topics.
                      </p>
                      <ul>
                        <li>
                          <a href="https://syntax.fm/">SyntaxFM</a>
                        </li>
                        <li>
                          <a href="https://www.codenewbie.org/podcast/">
                            Code Newbie
                          </a>
                        </li>
                        <li>
                          <a href="https://www.thisdot.co/modern-web">
                            Modern Web
                          </a>
                        </li>
                      </ul>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-grey">
                      <p className="title" />
                      <p className="subtitle" />
                      <figure className="image is-4by5">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzwSQTqobLXT-rapfSxfBM7aKYX9Haqsq39FIahdHYFXaELzB5g"
                          alt="Description"
                        />
                      </figure>
                    </article>
                  </div>
                </div>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-grey">
                  <div className="content">
                    <p className="title">Blogs</p>
                    <p className="subtitle">
                      With technology changing everyday, I thinks it's very
                      important to stay on top of new ideas to create a
                      challenging but progressive learning environment. Finding
                      articles and blogs with such topics gives you a glimpse
                      into other ideas and tech you haven't thought or heard of.
                    </p>
                    <div className="content" />
                  </div>
                  <ul>
                    <li>
                      <a href="https://www.feedspot.com/infiniterss.php?q=site:http%3A%2F%2Fblog.livecoding.tv%2Ffeed">
                        Livecoding
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.codepen.io/">CodePen</a>
                    </li>
                    <li>
                      <a href="http://thedailywtf.com/">The Daily WTF</a>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}
