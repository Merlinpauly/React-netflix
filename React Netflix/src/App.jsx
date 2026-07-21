import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Moviedetails from "./Moviedetails";


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
    </Routes>
  );
}

export default App;