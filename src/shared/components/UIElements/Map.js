import React from "react";

import "./map.css";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      Map
    </div>
  );
};

export default Map;
