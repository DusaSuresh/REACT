import React, { useState, useRef, useEffect } from "react";
function UseRefHook() {
  const [college, setcollege] = useState("")
  const [counter, setCounter] = useState(0)

  const inputRef = useRef("")
  const previousCounter = useRef(0)

  useEffect(()=>{
    previousCounter.current = counter
  },[counter])

  const resetCollege = () => {
    console.log("Reset called====")
    setcollege("");
    inputRef.current.focus();
  };
  return (
    <>
    <div>
      <h3>useRef()</h3>
        <input
          type="text"
          ref = {inputRef}
          placeholder="College Name"
          onChange={(e) => setcollege(e.target.value)}
        />
        <button onClick={resetCollege}>Click</button>
        My College Name is : {college}
    </div>
    
    <hr />
        <div>
            <button onClick={()=>{
                setCounter(Math.ceil(Math.random()*100))
            }}>Generate Random</button>
        <h3>Random counter Value is : {counter}</h3>
        </div>
        <div>
        <h4>Previous counter Value is : {previousCounter.current}</h4>
        </div>
    </>
  );
}

export default UseRefHook;
