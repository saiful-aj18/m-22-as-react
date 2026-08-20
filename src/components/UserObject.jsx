import { useState } from "react";

function UserObject() {
  const [user, setUser] = useState({
    name: "Monib",
    age: 25,
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Saiful",
    });
  };

  return (
    <div className="task-card">
      <h2>Task 5: Working with Object</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default UserObject;