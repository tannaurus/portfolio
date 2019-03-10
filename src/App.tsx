import React, { Component } from "react";

// Components
import Header from "./subComponents/Header";
import Splash from "./sections/Splash";
import Work from "./sections/Work";
import About from "./sections/About";

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
      </div>
    );
  }
}

export default App;
