import React, { useState } from "react";

function Demo() {
  const [gender, setGender] = useState("Male");

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div onChange={onChangeValue}>
      <input
        type="radio"
        value="Male"
        name="gender"
        checked={gender === "Male"}
      />{" "}
      Male
      <input
        type="radio"
        value="Female"
        name="gender"
        checked={gender === "Female"}
      />{" "}
      Female
      <input
        type="radio"
        value="Other"
        name="gender"
        checked={gender === "Other"}
      />{" "}
      Other
      {gender}
    </div>
  );
}

export default Demo;
