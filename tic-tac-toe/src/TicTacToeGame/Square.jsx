import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.on d/Click}
      style={{ border: "2px solid black", height: "100px", width: "100px" }}
      className="square"
    >
      <h5>{props.Value}</h5>
    </div>
  );
};
export default Square;
