import React from "react";
import { useState } from "react";
const Buttonnew = () => {
  const [color, setColor] = useState("white");

  function change() {
    if (color === "white") {
      setColor("red");
    } else if (color === "red") {
      setColor("blue");
    } else if (color === "blue") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else if (color === "green") {
      setColor("violet");
    } else if (color === "violet") {
      setColor("black");
    } else {
      setColor("white");
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: color,
      }}
    >
      <button style={{ marginLeft: "700px" }} onClick={change}>
        color
      </button>
    </div>
  );
};

export default Buttonnew;
