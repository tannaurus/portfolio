import React from "react";

import "./GridStyles.css";

interface GridProps { elements: Array<React.ReactNode>; };

const Grid = (props: GridProps) => {
  const { elements } = props;
  return (
    <ul className="grid">
      {
        elements.map(el => (
          <li className="grid-element">{el}</li>
        ))
      }
    </ul>
  )
};

export default Grid;