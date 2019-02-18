import React, { Component } from "react";

// Components
import Header from "./subComponents/Header";
import Splash from "./sections/Splash";

class App extends Component {
  render() {
    return (
      <div>
        <Header buttons={[
          {
            title: "Work",
            path: "/work"
          },
          {
            title: "About",
            path: "/about"
          },
          {
            title: "Contact",
            path: "/contact"
          }
        ]}/>
        <Splash/>
      </div>
    );
  }
}

export default App;
