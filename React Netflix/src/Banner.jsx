import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Trailermodel from "./Trailermodel";
function Banner({ movies }) {
    const [showtrailer, setShowtrailer] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const bannerMovie = movies[0];
    const navigate = useNavigate();
    if (!bannerMovie) {
        return null;
    }
    function handleMoreInfo() {

        localStorage.setItem(
            "clickedMovie",
            JSON.stringify(bannerMovie)
        );

        navigate("/movie");
    }
    return (
        <div className="banner" style={{
            backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.3),
        rgba(0,0,0,0.8)
      ),
      url(${bannerMovie.backdrop_path})
    `}}>
            <div className="banner-content">
                <h2 className="banner-title">{bannerMovie.original_title}</h2>
                <h3 className="banner-overview">{bannerMovie.overview}</h3>
                <div className="banner-buttons">
                    <button className="play-btn" onClick={() => setShowtrailer(true)}>▶ Play</button>
                    <button className="info-btn" onClick={handleMoreInfo}> ⓘ More Info</button>
                </div>
                <div className="subscribe-btn">
                        <button
                            className={subscribe ? "subscribed-btn" : "sub-btn"}
                            onClick={() => setSubscribe(!subscribe)}
                        >
                            {subscribe ? "✓ Subscribed" : "+ Subscribe"}
                        </button>
                    </div>
            </div>
            <Trailermodel onClose={() => setShowtrailer(false)} show={showtrailer} />
        </div>

    );
}
export default Banner;