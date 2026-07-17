import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate =  useNavigate();

  function handleemailChange(event) {
    setEmail(event.target.value);
  }
  function handlepasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    if (email === "") {
      setEmailError("Email is required")
      return;
    }
    if (!email.includes("@")) {
      setEmailError("Enter valid email id")
      return;
    }
    if (password === "") {
      setPasswordError("Password is required")
      return;
    }
    if (password.length < 8) {
      setPasswordError("password atleast contain 8 letters")
      return;
    }
    navigate("/dashboard");

  }

  return (
    <div className="Container">
      <div className="form">
        <form onSubmit={handleOnSubmit}>
          <h1>Log in</h1>
          <div className="input-group">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your Email id" value={email} onChange={handleemailChange} />
            <p className="error">{emailError}</p>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlepasswordChange} />
            <p className="error">{passwordError}</p>
          </div>



          <button type="submit">submit</button>
        </form>
      </div>
    </div>

  );
}

export default App;