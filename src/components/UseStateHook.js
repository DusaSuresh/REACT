import React, { useState } from "react";

function UseStateHook() {
  const [name, setName] = useState("Suresh");
  const [names, setNames] = useState([]);

  const changeName = () => {
    return setName("Suresh Dusa");
  };

  const addNames = (e) => {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  };
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <hr />
      <h3>useState()</h3>
      <button onClick={changeName}>useState Button</button>
      <h1>{name}</h1>
      {/* Arrays with useState */}
      <form onSubmit={addNames}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Add Names</button>
      </form>
      <ul>
        {names.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <hr />
      <h3>useEffect()</h3>
      <h4>
        We can achive the lifecycle methods of the class components using the
        useEffect in the <br />
        <br /> functional components.
      </h4>
    </div>
  );
}

export default UseStateHook;
