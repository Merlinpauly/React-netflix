import "./Dashboard.css";
import logo from "./assets/Netflix-Logo.png";
import "./Navbar.css";
import { useState } from "react";
function Moviedetails() {
    const movie = JSON.parse(
        localStorage.getItem("clickedMovie")
    );
    console.log(movie);
    const [showInfo, setShowInfo] = useState(false);
    function handleMoreInfo() {
        setShowInfo(!showInfo);
    }
    return (
        <div className="movie-details">
            <img src={movie.backdrop_path} alt={movie.original_title} className="movie-poster" />
            <div className="movie-info">
                <h1 className="movie-title">{movie.original_title}</h1>
                <div className="movie-buttons">
                    <button className="watch-btn">Watch Now</button>
                    <button className="more-info-btn" onClick={handleMoreInfo}> {showInfo ? "Hide Info" : "More Info"}

                    </button>
                </div>


                {
                    showInfo && (
                        <div className="movie-extra-info">

                            <p>
                                <strong>Overview:</strong> {movie.overview}
                            </p>

                            <p>
                                <strong>⭐ Rating:</strong> {movie.vote_average}
                            </p>

                            <p>
                                <strong>🌍 Language:</strong> {movie.original_language}
                            </p>


                        </div>

                    )
                }
            </div>

        </div>


    )
}
export default Moviedetails;