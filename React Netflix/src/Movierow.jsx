import { useRef } from "react";
import Moviecard from "./Moviecard";
import "./Dashboard.css";

function Movierow({ title, movies, cardWidth, cardHeight }) {
    const rowref = useRef();
    function scrollLeft() {
        rowref.current.scrollLeft -= 500;
    }
    function scrollRight() {
        rowref.current.scrollLeft += 500;
    }
    return (
        <div>
            <h2 style={{ marginLeft: "36px", fontSize: "30px" }}>{title}</h2>
            <div className="movie-row-container">
                <button onClick={scrollLeft} className="scroll-btn"> ◀ </button>

                <div className="movie-row" ref={rowref} >
                    {movies.map((movie) => (
                        <Moviecard
                            key={movie.id}
                            movie={movie}
                            cardWidth={cardWidth}
                            cardHeight={cardHeight}


                        />
                    ))}
                </div>
                <button onClick={scrollRight} className="scroll-btn">
                    ▶
                </button>
            </div>
        </div>
    );
}

export default Movierow;