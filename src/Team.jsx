import { useState } from "react"

export default function Team(){
  const [team, setTeam]= useState(11);
  const handleAdd =()=>{
const newTeam = team + 1;
setTeam(newTeam);
  }
  const handleRemove=()=>{
    const removeTeam = team - 1;
    setTeam(removeTeam);
  }


  return(
    
    <div style={{border: '4px solid purple',margin:'20px',padding:'10px',borderRadius:'20px',boxShadow:'0px 0px 2px 2px'}}>

      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}