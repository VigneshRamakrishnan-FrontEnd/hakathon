import { useState } from "react";

function Quest2() {
  const [name, setName] = useState("welcome");

  const updateArray = () => {
    if (name === "welcome") {
      setName("hello world");
    }
    if (name !== "welcome") {
      setName("welcome");
    }
  };
  return (
    <div>
      <p>{name}</p>
      <button key={name} onClick={() => updateArray()}>
        change
      </button>
    </div>
  );
}
export default Quest2;
