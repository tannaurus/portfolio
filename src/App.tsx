import React, { Component } from "react";

// Components
import Header from "./subComponents/Header";
import HomeScreen from "./screens/HomeScreen";

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
        <HomeScreen/>
      </div>
    );
  }
}

export default App;
