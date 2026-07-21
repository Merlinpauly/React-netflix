import "./Dashboard.css";
import {useNavigate} from "react-router-dom";
function Banner({ movies }) {
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
                <div className="banner-buttons">
                    <button className="play-btn">▶ Play</button>
                    <button className="info-btn" onClick={handleMoreInfo}> ⓘ More Info</button>
                </div>
            </div>
        </div>
    );
}
export default Banner;