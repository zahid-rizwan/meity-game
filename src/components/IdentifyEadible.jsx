// IdentifyEadible.js
import React from "react";

const IdentifyEadible = ({ style, title, src }) => {
  return (
    <div>
      <iframe
        src={src}
        title={title}
        style={style}
      ></iframe>
    </div>
  );
};

export default IdentifyEadible;
