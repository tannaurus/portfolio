import React from "react";

// Components
import Social from "./subComponents/Social";

// Styles
import "./AboutStyles.css";

const About = () => (
  <article id="about">
    <section className="self-introduction">
      <div className="about-me">
        <h2>ALLOW ME<br/>TO EXPLAIN</h2>
        <p className="bio">Hello, I'm Tanner Gill, a full stack web & mobile developer current residing in Portland, OR. I started playing with computers at an early age, always sharing what I've learned through countless tutorial videos uploaded to the internet. Now, many years later, I find my self doing essentially that; playing with computers and sharing what I know with anyone who wants to hear it.</p>
        <div className="contact-container">
          <p className="bio">Want to know more?<br/><a className="orange simi-bold" href="#contact">Reach out,</a> or find me online</p>
          <Social/>
        </div>
      </div>
      <img className="profile" src="/images/profile.png"/>
    </section>
    <section className="columns">
      <div className="column">
        <img src="/images/SVG/back-end.svg" className="column-icon"/>
        <h4>Back-end Developer</h4>
        <p className="column-desc">Giving life to an otherwise static application is one of my favorite parts of developing a new idea.</p>
        <h5>Languages & frameworks</h5>
        <p className="stats">Node, Express, MondoDB, PostgreSQL</p>
      </div>
      <div className="column">
        <img src="/images/SVG/front-end.svg" className="column-icon"/>
        <h4>Front-end Developer</h4>
        <p className="column-desc">Bringing the design concepts into the real world, priding myself on design focused attention to detail.</p>
        <h5>Languages & frameworks</h5>
        <p className="stats">HTML, CSS, JavaScript, React, React Native, TypeScript, jQuery, Ruby on Rails</p>
      </div>
      <div className="column">
        <img src="/images/SVG/teaching.svg" className="column-icon"/>
        <h4>Technical Instructor</h4>
        <p className="column-desc">Sharing knowledge is the key to a team's long term success. I've been lucky enough to be guide students through their very first programming projects.</p>
        <h5>Speaking stats</h5>
        <p className="stats">100+ events, hundreds of students, front-end workshops, back-end workshops</p>
      </div>
    </section>
  </article>
)

export default About;