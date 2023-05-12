import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Posts from "./posts";


const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(10);

  return (
    <div>
      <h1>COUNTER: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 100);
        }}
      >
        sumar
      </button>

      <button onClick={() => {
        setCounter(counter - 23)
      }}>
        Restar
      </button>

      <button onClick={() => {
        setCounter(1000)
      }}>
        Reiniciar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
