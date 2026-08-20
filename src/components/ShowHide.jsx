import { useState } from "react";

function ShowHide() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="task-card">
      <h2>Task 2: Show/Hide Text</h2>

      <button onClick={toggleText}>Show/Hide</button>

      {showText && <p>Hello React</p>}
    </div>
  );
}

export default ShowHide;