import { useState } from "react";
import "./button.css";

export default function But() {
  const [color, setColor] = useState(false);
  function change() {
    setColor(false);
  }
  function change1() {
    setColor(true);
  }

  return (
    <div>
      <div>
        {color ? (
          <div className="app1">
            <button onClick={change}>change1</button>
          </div>
        ) : (
          <div className="bg1">
            <button onClick={change1}>change1</button>
          </div>
        )}
      </div>
    </div>
  );
}
