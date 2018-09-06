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
                  <p class="title">Mission</p>
                  <p class="subtitle" />
                  <p>
                    To be apart of Nashvilles tech community is incredible from
                    what I've seen so far and makes me very excited for what's
                    comming up in the near future. I really want to contribute
                    by making a positive impact in the tech community while
                    looking for not only a challenge, but an inspiring and
                    fulfulling career for me to grow in as a software developer.
                  </p>
                </article>
                <article class="tile is-child notification is-grey">
                  <p class="title">Goals</p>
                  <p class="subtitle" />
                  <p>
                    When thinking about my career, my main goal is to always be
                    in a situation where I am lerning and bettering my craft.
                    Wether that be from a mentor, a great resource, or just a
                    positive work environment that encourages that kind of
                    growth. With tech constantly changing, I'm always excited to
                    see what's being created and how people are using it.
                  </p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-grey">
                  <p class="title" />
                  <p class="subtitle" />
                  <figure class="image is-3by4">
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
                <p class="title">Education</p>
                <p class="subtitle" />
                <div class="content">
                  One of the biggest reasons why I love being a software
                  developer is the fact that there will never be a time in my
                  professional career were I'm not learning. Having a profession
                  that you're passionate about that also is challenging makes
                  for an incredible work environment. While at Nashville
                  Software School, I was able to learn and hone the skills
                  needed to thrive in this kind of environment. Something that
                  was said very early on that really stuck with me was that in
                  an industry where everything is constantly changing and
                  evolving, it's impossible to know absolutely everything. What
                  I plan to do is to make sure I have the skills to take a
                  problem and think like a programmer to find an answer.
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-grey">
              <div class="content">
                <p class="title">About Me</p>
                <p class="subtitle" />
                <div class="content">
                  I've always found these sections to be difficult to write.
                  Only because you have a lifetime of information and only a
                  couple of paragraphs to sum everything up, so here we go. I'm
                  born and raised in Nashville and was fortunate enough to grow
                  up with an incredible family. Both my parents were musicians
                  so I fell in love with music myself very early on and haven't
                  stopped since. From middle and high school band to a
                  performance major at college, anything and everything that I
                  could do that was music related, I did. Although music was
                  everything to me, I found another passion that was instilled
                  on me early on as well. That passion was tech and I was
                  hooked. From tearing down computers and rebuilding them to
                  writing very basic code that wasn't very good, if I wasn't
                  playing a gig or practicing, I was in front of a computer in
                  some form or fashion. Something I noticed as I got older was
                  how much these two passions had in common. There was a
                  creative aspect to both interests that I recently made a
                  connection with and that's why I immediately started my
                  journey to becoming a software developer. I never thought I
                  would find something that I connected with so much that wasn't
                  music related, but here we are. Starting my career as a
                  software developer has been an incredible experience so far
                  and I can't wait to see what the future holds and the
                  challenges I will face in this endeavour.
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
