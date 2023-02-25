import React, {useState} from 'react'

function Bt() {
    const [count , setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
  return (
    <div>
        <p>counts:{count}</p>
        <button onClick={increment}>click</button>
    </div>
  )
}
export default Bt

