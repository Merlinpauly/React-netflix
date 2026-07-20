import "./Dashboard.css";
function Moviecard({ movie }) {
  return (
    <div className="movie-card">
        <img src={movie.poster_path}
        alt={movie.original_title}/>
      
    </div>
  );
}

export default Moviecard;
