import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="task-card">
      <h2>Task 1: Counter</h2>

      <h3>{count}</h3>

      <button onClick={increase}>+Increase</button>
      <button onClick={decrease}>-Decrease</button>
    </div>
  );
}

export default Counter;