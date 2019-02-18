import React from "react";
import ScreenSection from "../../subComponents/ScreenSection"

// Styles
import "../../styles/AppStyles.css";
import "./HomeStyles.css";

class Home extends React.Component {

  render() {
    return (
      <article id="splash" className="fill-screen flex flex-center">
        <section className="flex flex-center intro-container">
          <img id="introduction" className="introduction" src="/images/intro.svg"/>
        </section>
        <img className="pointer" src="/images/pointer.svg"/>
      </article>
    )
  }
}

export default Home;