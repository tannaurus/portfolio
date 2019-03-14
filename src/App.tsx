import React, { Component } from "react";

// Components
import Header from "./subComponents/Header";
import Splash from "./sections/Splash";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Header buttons={[
          {
            title: "Work",
            path: "#work"
          },
          {
            title: "About",
            path: "#about"
          },
          {
            title: "Contact",
            path: "/contact"
          }
        ]}/>
        <Splash />
        <Work />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
