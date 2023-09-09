import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./User";
import Users from "./User";
import Friends from "./Friends";


function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () =>{
    alert('click me')

  }
  const addToFive = (num)=>{
    alert(num + 5)

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React Concepts 2</h1>
{/* all button here */}
      <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Here</button>
      <button onClick={()=>{alert('hey guys')}}>click</button>
      <button onClick={()=> addToFive(3)}>four</button>
      </div>
      <Team></Team>
      <Counter ></Counter>
      <User></User>
      <Users></Users>
      <Friends></Friends>
     






    </>
  );
}

export default App;
