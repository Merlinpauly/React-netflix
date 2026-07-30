import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Moviedetails from "./pages/Moviedetails";
import Password from "./pages/Password";


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