import React,{useState} from 'react'

export default function HookUseState() {

const[count, setCount]  = useState(0)

const increaseCount = () => {
    //setCount(count + 1)
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
}

const decreaseCount = () => {
    setCount(count -1 )
}

return (
    <>
    <div>HookUseState</div>
    <button onClick={decreaseCount}>-</button>
    <span>{count}</span>
    <button onClick={increaseCount}>+</button>
    </>
  )
}
