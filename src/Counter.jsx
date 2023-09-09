import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0);
  

  const handleAdd=()=>{
    const newCount = count +1;
    setCount(newCount);


  }
  const handle_add =()=>{
    const newCount = count - 1;
    setCount(newCount);
  }

  
  return(
    <div style={{border: '4px solid green',margin:'20px',padding:'10px',borderRadius:'20px',boxShadow:'0px 0px 2px 2px'}}>

      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handle_add}>Reduce</button>

    </div>
  )
}