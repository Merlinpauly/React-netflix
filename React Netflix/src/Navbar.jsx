import "./Navbar.css";
import logo from "./assets/Netflix-Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {FaMoon} from "react-icons/fa";
function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt="Netflix Logo" className="logo-img" />
            </div>
            <div className="right">
               <input type="text" placeholder="Search..."  />
                <FaSearch />
                <FaMoon />
                <FaUserCircle/>
            </div>
        </nav>
    );
}
export default Navbar;