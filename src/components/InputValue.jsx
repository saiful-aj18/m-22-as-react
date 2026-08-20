import { useState } from "react";

function InputValue() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const showValue = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div className="task-card">
      <h2>Task 3: Input Value</h2>

      <input
        type="text"
        placeholder="Enter something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={showValue}>Show Value</button>

      <p>{displayValue}</p>
    </div>
  );
}

export default InputValue;