import { useState } from "react";
function App(){
  const[username , setUserName] = useState("");
  const[email , setEmail] = useState("");
  function handlenameChange(){
    setUserName(event.target.value);
  }
  function handleemailChange(){
    setEmail(event.target.value);
  }
  return (
    <div className="Login-form">
      <form>
        <label>Username</label>
        <input type="text" value={username} onChange={handlenameChange} placeholder="Enter your Username"/>
        <label>Email ID</label>
        <input type="email" value={email} onChange={handleemailChange} placeholder="Enter your Email id"/>
      </form>
    </div>

  );
}

export default App;