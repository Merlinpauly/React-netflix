import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Login.css";
function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showsignup, setShowsignup] = useState(false);
  const [name,setName] = useState("");
  const [fullname,setFullname] = useState("");
  const [phone,setPhone] = useState("");
  const [gender,setGender] = useState("all genders"); 
  
  const navigate = useNavigate();

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
        {
          showsignup ? (
            <form className="signup-form">
              <h1>Signup Form</h1>
              <div className="form-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Email ID</label>
                  <input type="email" placeholder="Enter your Email id" />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Phonenumber</label>
                  <input type="text" placeholder="Enter your phone number" />
                </div>
                <div className="input-group">
                  <label>Gender</label>
                  <select>
                    <option value="all genders">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <button type="submit">submit</button>
              <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); setShowsignup(false); }}
              >Already have an account? Log in</a>
            </form>



          ) : (

            <form onSubmit={handleOnSubmit} className="login-form">

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
              <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); setShowsignup(true); }}
              >New to Netflix? Sign up</a>


            </form>

          )
        }
      </div>
    </div>

  );
}

export default App;