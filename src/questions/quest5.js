import React, { useEffect, useState } from "react";
import "./quest5.css";
import axios from "axios";

export default function Quest5() {
  const [state, setState] = useState([]);
  useEffect(function () {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then(function (response) {
        setState(response.data);
        console.log(response, "RESPOSNE");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // const onDelete = (dat) => {
  //   let updatedValue = [...state];
  //   updatedValue.splice(dat, 1);
  //   setState(updatedValue);
  // };

  return (
    <div className="whole">
      <h1>Our tours</h1>
      {/* {state.map((dat) => {
        return (
          <div className="box">
            <img className="images" src={dat.image}></img>
            <div className="t1">
              <p> {dat.name}</p>
              <p> ${dat.price}</p>
            </div>
            <br></br>
            <p> {dat.info}</p>
            <br></br>
            <button onClick={() => onDelete(dat)}>Not Intrested</button>
            <br></br>
          </div>
        );
      })} */}
    </div>
  );
}
