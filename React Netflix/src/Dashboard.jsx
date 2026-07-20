import { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Movierow from "./Movierow";

function Dashboard() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {

      const response = await fetch(
        "https://jsonfakery.com/movies/paginated"
      );

      const data = await response.json();

      setMovies(data.data);
    }

    getMovies();

  }, []);
  console.log(movies);

  return (
    <>
      <Navbar />

      <Banner movies={movies} />

      <Movierow
        title="Trending Now"
        movies={movies}
      />

      <Movierow
        title="Top 10 Movies"
        movies={movies}
      />
    </>
  );
}

export default Dashboard;




