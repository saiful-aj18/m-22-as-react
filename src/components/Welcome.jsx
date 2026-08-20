import { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div className="task-card">
      <h2>Task 6: useEffect</h2>

      <h3>Welcome to React</h3>
    </div>
  );
}

export default Welcome;