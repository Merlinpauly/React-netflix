import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "./assets/Netflix-Logo.png";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [showsignup, setShowsignup] = useState(false);

  const [signupemail, setSignupemail] = useState("");
  const [signuppassword, setSignuppassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("all genders");

  const [signupemailError, setSignupemailError] = useState("");
  const [signuppasswordError, setSignuppasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [loading, setLoading] = useState(false);
  const [showtoast, setShowtoast] = useState(false);


  const navigate = useNavigate();

  function handleemailChange(event) {
    setEmail(event.target.value);
  }
  function handlepasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSignupemailChange(event) {
    setSignupemail(event.target.value);
  }
  function handleSignuppasswordChange(event) {
    setSignuppassword(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleFullnameChange(event) {
    setFullname(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }
  function handleGenderChange(event) {
    setGender(event.target.value);
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
      setEmailError("Email is invalid")
      return;
    }
    if (password === "") {
      setPasswordError("Password is required")
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password is incorrect")
      return;
    }
    const users = JSON.parse(
      localStorage.getItem("netflixUsers")
    ) || [];
    const foundUser = users.find((user) => {
      return (
        user.email === email &&
        user.password === password
      );
    });
    if (foundUser) {

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(foundUser)
      );

      navigate("/dashboard");

    } else {

      setPasswordError("Invalid Email or Password");

    }


  }
  function handleSignupSubmit(event) {
    event.preventDefault();
    setSignupemailError("");
    setSignuppasswordError("");
    setNameError("");
    setFullnameError("");
    setPhoneError("");
    setGenderError("");
    if (signupemail === "") {
      setSignupemailError("Email is required");
      return;
    }
    if (!signupemail.includes("@")) {
      setSignupemailError("Email is invalid");
      return;
    }
    if (signuppassword === "") {
      setSignuppasswordError("Password is required");
      return;
    }
    if (signuppassword.length < 8) {
      setSignuppasswordError("Password should be at least 8 characters long");
      return;
    }
    if (name === "") {
      setNameError("Name is  required");
      return;
    }
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      setNameError("Name should contain only alphabets");
      return;
    }
    if (fullname === "") {
      setFullnameError("Full Name is  required");
      return;
    }
    if (!nameRegex.test(fullname)) {
      setFullnameError("Full Name should contain only alphabets");
      return;
    }
    if (phone === "") {
      setPhoneError("Phone number is required");
      return;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Phone number should be 10 digits");
      return;
    }
    const user = {
      name: name,
      fullname: fullname,
      email: signupemail,
      password: signuppassword,
      phone: phone,
      gender: gender
    };

    const users = JSON.parse(
      localStorage.getItem("netflixUsers")
    ) || [];
    users.push(user);
    localStorage.setItem(
      "netflixUsers",
      JSON.stringify(users)
    );

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setShowsignup(false);

      setShowtoast(true);

      setTimeout(() => {

        setShowtoast(false);

      }, 2000);

    }, 2000);

  }


  return (

    <div className="Container">
      <img
        src={logo}
        alt="Netflix Logo"
        className="login-logo"
      />

      <div className="form">
        {
          showtoast && (
            <div className="toast">
              ✅ Account Created Successfully
              <button className="close-button" onClick={() => setShowtoast(false)}>X</button>
            </div>
          )
        }
        {
          showsignup ? (
            <form className="signup-form" onSubmit={handleSignupSubmit}>
              <button type="button" className="close-button" onClick={() => setShowsignup(false)}>X</button>
              <h1>Signup Form</h1>
              <div className="form-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
                  <p className="error">{nameError}</p>
                </div>
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" value={fullname} onChange={handleFullnameChange} />
                  <p className="error">{fullnameError}</p>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Email ID</label>
                  <input type="email" placeholder="Enter your Email id" value={signupemail} onChange={handleSignupemailChange} />
                  <p className="error">{signupemailError}</p>
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <div className="password-field">
                    <input type={showSignupPassword ? "text" : "password"} placeholder="Enter your password" value={signuppassword} onChange={handleSignuppasswordChange} />
                    {
                      showSignupPassword ?

                        <FaEyeSlash className="eye-icon"
                          onClick={() => setShowSignupPassword(false)}
                        />

                        :

                        <FaEye className="eye-icon"
                          onClick={() => setShowSignupPassword(true)}
                        />
                    }
                  </div>
                  <p className="error">{signuppasswordError}</p>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Enter your phone number" value={phone} onChange={handlePhoneChange} />
                  <p className="error">{phoneError}</p>
                </div>
                <div className="input-group">
                  <label>Gender</label>
                  <select value={gender} onChange={handleGenderChange}>

                    <option value="select Genders">Select Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <p className="error">{genderError}</p>
                </div>
              </div>
              <button type="submit">submit</button>
              <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); setShowsignup(false); }}
              >Already have an account? Log in</a>
              {
                loading && (
                  <div className="loader-overlay">
                    <div className="loader"></div>
                  </div>
                )
              }

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
                <div className="password-field">
                  <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={handlepasswordChange} />
                  {
                    showPassword ?

                      <FaEyeSlash className="eye-icon"
                        onClick={() => setShowPassword(false)}
                      />

                      :

                      <FaEye className="eye-icon"
                        onClick={() => setShowPassword(true)}
                      />
                  }
                </div>
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