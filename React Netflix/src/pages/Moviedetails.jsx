import "../styles/Dashboard.css";
import logo from "../assets/Netflix-Logo.png";
import "../styles/Dashboard.css";
import { useState } from "react";
import Trailermodel from "../components/Trailermodel";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function Moviedetails() {
    const [showTrailer, setShowTrailer] = useState(false);
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
            <Navbar />
            <img src={movie.backdrop_path} alt={movie.original_title} className="movie-poster" />
            <div className="movie-info">
                <h1 className="movie-title">{movie.original_title}</h1>
                <div className="movie-buttons">
                    <button className="watch-btn" onClick={() => setShowTrailer(true)}>Watch Now</button>
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
            <Trailermodel onClose={() => setShowTrailer(false)} show={showTrailer} />

        </div>


    )
}
export default Moviedetails;