import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Mailto from 'react-protected-mailto';

export default class Contact extends Component {
  render() {
    return (
      <div class="tile is-ancestor box">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-grey">
                <p class="title">Resume</p>
                <p class="subtitle">
                  <Link
                    to="route"
                    onClick={event => {
                      event.preventDefault();
                      window.open('resume/Resume.pdf');
                    }}
                  >
                    Click to download
                  </Link>
                </p>
              </article>
              <article class="tile is-child notification is-grey">
                <p class="title">LinkedIn</p>
                <p class="subtitle">
                  <a href="https://www.linkedin.com/in/jonnyriggs615/">
                    Profile
                  </a>
                </p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-grey">
              <p class="title">Twitter</p>
              <p class="subtitle">
                <a href="https://twitter.com/_jonny_riggs">Profile</a>
              </p>
              <div class="content" />
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <div class="content">
              <p class="title">Feel Free to Get in Touch!</p>
              <p class="subtitle" />
              <div class="content">
                I can't thank you enough for taking the time to check out my
                personal site. I am always up for talking about anything tech
                related so feel free to reach out in any way shape or form. I'll
                list a couple other forms of contact and hope to talk with
                everyone soon. Thanks again!
              </div>
              <p>
                Phone: <Mailto tel="615-476-3816" />
                <br />
                Email:{' '}
                <Mailto
                  email="jonny.riggs615@gmail.com"
                  headers={
                    ({ subject: 'Questions For Jonathan Riggs' })
                  }
                />
              </p>
              <div />
            </div>
          </article>
        </div>
      </div>
    );
  }
}
