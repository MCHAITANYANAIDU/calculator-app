import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input)); // ⚠ Be cautious using eval()
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {["0", ".", "+", "="].map((item) => (
          <button key={item} onClick={item === "=" ? calculateResult : () => handleClick(item)}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default App;
