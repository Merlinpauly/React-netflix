import "./Dashboard.css"
function Banner({ movies }) {
    const bannerMovie = movies[0];
    if (!bannerMovie) {
        return null;
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
                    <button className="info-btn"> ⓘ More Info</button>
                </div>
            </div>
        </div>
    );
}
export default Banner;