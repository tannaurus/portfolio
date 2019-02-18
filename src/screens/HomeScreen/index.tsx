import React from "react";
import ScreenSection from "../../subComponents/ScreenSection"

// Styles
import "../../styles/AppStyles.css";
import "./HomeScreenStyles.css";

class Home extends React.Component {

  render() {
    return (
      <div>
        <article id="splash" className="fill-screen flex flex-center">
          <section className="flex flex-center intro-container">
            <img id="introduction" className="introduction" src="/images/intro.svg"/>
          </section>
          <img className="pointer" src="/images/pointer.svg"/>
        </article>
        <article className="fill-screen flex flex-center">

        </article>
      </div>
    )
  }
}

export default Home;