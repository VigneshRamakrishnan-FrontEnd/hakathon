import { useState } from "react";
import "./quest6.css";

export default function Quest6() {
  const [details, setDetails] = useState([]);

  const [name, setName] = useState("");
  const [gen, setGen] = useState("");
  const [age, setAge] = useState("");
  const [sou, setSou] = useState("");
  const [des, setDes] = useState("");
  const [yes, setYes] = useState("");

  function onChangeValue(event) {
    setGen(event.target.value);
    console.log(gen, "gender");
  }
  const onSave = () => {
    let updatedValue = [...details].concat({
      name: name,
      gen: gen,
      age: age,
      des: des,
      sou: sou,
      yes: yes,
    });
    console.log(updatedValue);
    setDetails(updatedValue);
    console.log(details, "jddsj");
  };

  return (
    <div className="app">
      <div className="app1">
        <div className="app2">
          <label>
            Name
            <input
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <br />
          <div onChange={onChangeValue}>
            <label>Gender</label>
            <input
              type="radio"
              checked={gender === "male"}
              value="Male"
              name="gender"
            />{" "}
            Male
            <input type="radio" value="Female" name="gender" /> Female
            {/* <input type="radio" value="Other" name="gender" /> Other */}
          </div>
          <br />
          <label>
            Age
            <input
              placeholder="Age"
              age="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </label>
          <br />
          <label>
            source
            <select
              onChange={(e) => setSou(" Travelling From " + e.target.value)}
            >
              <option></option>
              <option>trichy</option>
              <option>madurai</option>
              <option>kovai</option>
            </select>
          </label>
          <br />
          <label>
            Destination
            <select onChange={(e) => setDes(" To " + e.target.value)}>
              <option></option>
              <option>chennai</option>
              <option>bangalore</option>
              <option>hyderabad</option>
            </select>
          </label>
          <br />
          <input type="checkbox" onClick={() => setYes("yes i agree")}></input>
          <span> i agree terms and conditions</span>

          <br />
          <button onClick={onSave}>submit</button>
        </div>
      </div>
      {details.map((item) => {
        return (
          <div key={item}>
            <p>{item.name}</p>
            <p>{item.gen}</p>
            <p>{item.age}</p>
            <p>
              <span>{item.sou}</span> {item.des}
            </p>
            <p>{item.yes}</p>
          </div>
        );
      })}
    </div>
  );
}
