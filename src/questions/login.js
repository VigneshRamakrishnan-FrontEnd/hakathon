import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="box">
      <div className="log">
        <h1>LOGIN</h1>
        <div className="user">
          <p>user id</p>
          <input />
        </div>
        <div className="pw">
          <p>password</p>
          <input />
        </div>
        <div className="b">
          <button>submit</button>
        </div>
      </div>
    </div>
  );
}
