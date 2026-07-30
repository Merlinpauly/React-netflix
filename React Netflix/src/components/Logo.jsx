import logo from "../assets/Netflix-Logo.png";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Logo() {
    const navigate = useNavigate();
    function handleLogoClick() {
        navigate("/dashboard");
    }
    return (
        <img
        src={logo}
        alt="Netflix Logo"
        className="logo-img"
        onClick={handleLogoClick}
    />
    )
}
export default Logo;