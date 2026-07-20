import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";
import "./Dashboard.css";
function Movierow({title}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const response = await fetch("https://jsonfakery.com/movies/paginated");
            const data = await response.json();
            console.log(data.data[0]);
            setMovies(data.data);// inside our api another data will come . because we call data.data
        }
        getMovies();


    }, []);
    return (
        <div>
            <h2 style={{color:"white"}}>{title}</h2>

            <div className="movie-row">
                {movies.map((movie) => (
                    <Moviecard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>

        </div>
    );
}
export default Movierow;