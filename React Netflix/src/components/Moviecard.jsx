import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
function Moviecard({  movie,cardWidth,cardHeight }) {
  const navigate = useNavigate();
  function handleMovieClick() {
    localStorage.setItem("clickedMovie", JSON.stringify(movie));
    navigate("/movie");
  }
  return (
    <div className="movie-card" onClick={handleMovieClick} style={{
      width: cardWidth,
      height: cardHeight
    }}>
      <img src={movie.poster_path}
        alt={movie.original_title} />

    </div>
  );
}

export default Moviecard;
