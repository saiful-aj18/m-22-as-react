import Counter from "./components/Counter";
import ShowHide from "./components/ShowHide";
import InputValue from "./components/InputValue";
import FocusInput from "./components/FocusInput";
import UserObject from "./components/UserObject";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Module 22 Assignment</h1>

      <Counter />
      <ShowHide />
      <InputValue />
      <FocusInput />
      <UserObject />
      <Welcome />

    </div>
  );
}

export default App;