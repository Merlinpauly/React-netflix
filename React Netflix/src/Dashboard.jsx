import { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Movierow from "./Movierow";

function Dashboard() {

  const [movies, setMovies] = useState([]);
  const [darkmode, setDarkmode] = useState(true);

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
  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkmode(true);
    }

    if (savedTheme === "light") {
      setDarkmode(false);
    }

  }, []);

  return (
    <div className={darkmode ? "dark-theme" : "light-theme"}>
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />

      <Banner movies={movies} />

      <Movierow
        title="Trending Now"
        movies={movies}
      />

      <Movierow
        title="Top 10 Movies"
        movies={movies}
      />
    </div>
  );
}

export default Dashboard;




