import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Trailermodel from "./Trailermodel";
function Banner({ movies }) {
    const [showtrailer, setShowtrailer] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [currentBanner, setCurrentBanner] = useState(0);
    const bannerMovie = movies[currentBanner];
    const navigate = useNavigate();
    useEffect(() => {

        if (movies.length === 0) return;

        const interval = setInterval(() => {

            nextBanner();

        }, 9000);

        return () => clearInterval(interval);

    }, [movies]);
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

    function nextBanner() {

        setCurrentBanner((prev) => {

            return (prev + 1) % movies.length;

        });

    }
    function prevBanner() {

        setCurrentBanner((prev) => {

            if (prev === 0) {
                return movies.length - 1;
            }

            return prev - 1;

        });

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
            <button
                className="prev-btn"
                onClick={prevBanner}
            >
                ❮
            </button>

            <button
                className="next-btn"
                onClick={nextBanner}
            >
                ❯
            </button>
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