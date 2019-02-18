import React from "react";

import "./ScreenSection.css";

export interface ScreenSectionProps { title: string; };


class ScreenSection extends React.Component<ScreenSectionProps> {
  render() {
    const { title } = this.props;
    return (
      <section className="wrapper">
        <h3>{title}</h3>
      </section>
    );
  }
};

export default ScreenSection;