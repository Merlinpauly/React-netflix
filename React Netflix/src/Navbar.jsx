import "./Navbar.css";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ darkmode, setDarkmode  , language, setLanguage, search, setSearch }) {
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
    function handleProfile(){
        navigate("/profile")
    }
    function handlePassword(){
        navigate("/password")
    }



    return (
        <nav className={darkmode ? "navbar-dark" : "navbar-light"}>
            <div className="logo">
                <Logo />
            </div>
            <div className="right">
                <div className="search-bar">
                    <input type="text" placeholder="Search movies..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <FaSearch />
                </div>
                <select value={language} onChange={(e) => setLanguage(e.target.value) } className="language-select">
                    <option value="all">All Languages</option>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
                
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

                                <p onClick={handleProfile}>My Profile</p>

                                <p onClick={handlePassword}>Forgot Password</p>

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