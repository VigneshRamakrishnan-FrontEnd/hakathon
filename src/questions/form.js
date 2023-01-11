import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [na, setNa] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setNa(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
      {na}
    </form>
  );
}
