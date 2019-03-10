import React from "react";

// Components
import Social from "./subComponents/Social";

// Styles
import "./AboutStyles.css";

const About = () => (
  <article id="about">
    <div className="about-me">
      <h2>ALLOW ME<br/>TO EXPLAIN</h2>
      <p className="bio">Hello, I'm Tanner Gill, a full stack web & mobile developer current residing in Portland, OR. I started playing with computers at an early age, always sharing what I've learned through countless tutorial videos uploaded to the internet. Now, many years later, I find my self doing essentially that; playing with computers and sharing what I know with anyone who wants to hear it.</p>
      <div className="contact-container">
        <p className="bio">Want to know more?<br/><a className="orange simi-bold" href="#contact">Reach out,</a> or find me online</p>
        <Social/>
      </div>
    </div>
    <img className="profile" src="/images/profile.png"/>
  </article>
)

export default About;