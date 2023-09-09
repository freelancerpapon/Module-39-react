import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){

  const [friends, setFriends]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users#')
    .then(res => res.json())
    .then(data => setFriends(data))

  },[])



  return(

    <div style={{border: '4px solid red',margin:'20px',padding:'10px',borderRadius:'20px',boxShadow:'0px 0px 2px 2px'}}>

      <h2>Friends: {friends.length}</h2>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }


    </div>
  )
}