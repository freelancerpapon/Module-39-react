export default function Friend({friend}){
  const {name, email , id}= friend;
  return (
    <div style={{border: '4px solid red',margin:'20px',padding:'10px',borderRadius:'20px',boxShadow:'0px 0px 2px 2px'}}>
      <p>id: {id}</p>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>

    </div>
  )
}