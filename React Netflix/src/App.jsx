import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Moviedetails from "./Moviedetails";
import Profile from "./Profile";
import Password from "./Password";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard"
        element={
          <>
            <Dashboard />
          </>
        } />
      <Route path="/movie" element={<Moviedetails />} />  
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/password" element={<Password/>}/>
    </Routes>
  );
}

export default App;