import { useState } from "react";
import { useEffect } from "react";

export default function Bg() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  function change(color) {
    if ((color = "white")) {
      setColor("red");
      console.log(color, "red");
    } else if ((color = "red")) {
      setColor("blue");
      console.log(color, "blue");
    } else {
      setColor("white");
    }
  }

  function change2(color) {
    setColor("yellow");
  }
  function change3(color) {
    setColor("green");
  }

  return (
    <div>
      <div>
        <button onClick={change}> red</button>
        <button onClick={change2}> yellow</button>
        <button onClick={change3}> green</button>
      </div>
    </div>
  );
}

 