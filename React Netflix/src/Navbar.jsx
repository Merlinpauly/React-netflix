import "./Navbar.css";
import logo from "./assets/Netflix-Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar({ darkmode, setDarkmode }) {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    function toggleTheme() {

        const newTheme = !darkmode;

        setDarkmode(newTheme);

        localStorage.setItem(
            "theme",
            newTheme ? "dark" : "light"
        );
    }
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
}



    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Netflix Logo" className="logo-img" />
            </div>
            <div className="right">
                <input type="text" placeholder="Search..." />
                <FaSearch />
                {
                    darkmode ?

                        <FaMoon
                            className="moon-icon"
                            onClick={toggleTheme}
                        />
                        :
                        <FaSun
                            className="moon-icon"
                            onClick={toggleTheme}
                        />
                }
                <div className="profile-menu">

                    <FaUserCircle
                        className="profile-icon"
                        onClick={toggleMenu}
                    />

                    {
                        showMenu && (
                            <div className="dropdown">

                                <p>My Profile</p>

                                <p>Settings</p>

                               <p onClick={handleLogout}>Logout</p>

                            </div>
                        )
                    }

                </div>
            </div>
        </nav>
    );
}
export default Navbar;