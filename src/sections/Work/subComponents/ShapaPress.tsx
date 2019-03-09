import React from "react";

// Components
import Grid from "./Grid";

// Styles
import "./ProjectStyles.css";

const mashable = <a className="press-link" href="https://mashable.com/2017/12/18/shapa-scale-launched/#rgsFMy4dLiqq" target="_blank"><img className="press-img" src="/images/press/mashable-logo.png"/></a>;
const engadget = <a className="press-link" href="https://www.engadget.com/2018/01/01/shapa-scale-psychology-weight-l/" target="_blank"><img className="press-img" src="/images/press/engadget-logo.png"/></a>;
const wired = <a className="press-link" href="https://www.wired.com/story/shapa-smart-scale/" target="_blank"><img className="press-img" src="/images/press/wired-logo.png"/></a>;
const newsweek = <a className="press-link" href="https://www.newsweek.com/how-lose-weight-why-stepping-scale-gets-way-751886" target="_blank"><img className="press-img" src="/images/press/newsweek-logo.png"/></a>;

const ShapaPress = () => (
  <div className="shapa-press-container">
    <Grid elements={[mashable, wired, engadget, newsweek]}/>
  </div>
);

export default ShapaPress;