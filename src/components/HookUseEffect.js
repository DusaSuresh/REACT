import React,{useState, useEffect} from 'react'

export default function HookUseMemo() {

const [count, setCount]  = useState(0)
const [windowSize, setWindowSize] = useState(window.innerWidth)

const increaseCount = () => {
    //setCount(count + 1)
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
}

const decreaseCount = () => {
    setCount(count -1 )
}

useEffect(()=>{
    window.addEventListener('resize', ()=>{
        setWindowSize(window.innerWidth)
    })

    return () =>{
        window.removeEventListener('resize');
    }
},[count])

return (
    <>
    <div>HookUseEffect</div>
    <button onClick={decreaseCount}>-</button>
    <span>{count}</span>
    <button onClick={increaseCount}>+</button>
    <h1>{windowSize}</h1>
    </>
  )
}
