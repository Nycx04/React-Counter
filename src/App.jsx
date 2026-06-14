import { useState } from "react";
import "App.css";

function App() {
  const [count, setter] = useState(0); //increment by 5
  function addition() {
    setter(count + 5);
  }
  function subtraction() {
    setter(count - 5);
  }
  function increment() {
    setter(count + 1);
  }

  return (
    <div>
      <div id="box" align="center">
        <h1 id="count">{count}</h1>
      </div>
      <div align="center">
        <button id="jump5" onClick={addition}>
          Click to increment by 5
        </button>
        <button id="button" onClick={increment}>
          Click to increment by 1
        </button>
        <button id="down5" onClick={subtraction}>
          Click to decrement by 5
        </button>
      </div>
    </div>
  );
}

export default App;
