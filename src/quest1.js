import React, { useState } from "react";

export default function Homenew() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  return (
    <div className="display">
      <div>
        <div>
          <div className="appp">
            C<button onClick={() => setValue1(value1 + 1)}>vote</button>
            <br />
            C++ <button onClick={() => setValue2(value2 + 1)}>vote</button>
            <br />
            Java <button onClick={() => setValue3(value3 + 1)}>vote</button>
            <br />
            python <button onClick={() => setValue4(value4 + 1)}>vote</button>
          </div>
          <br />
          <br />
          <br />
          <div className="appp2"></div>
        </div>
        c={value1}
        <br />
        c++={value2}
        <br />
        Java={value3}
        <br />
        python={value4}
        <br />
      </div>
    </div>
  );
}
