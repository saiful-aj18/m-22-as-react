import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="task-card">
      <h2>Task 4: useRef</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus"
      />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;